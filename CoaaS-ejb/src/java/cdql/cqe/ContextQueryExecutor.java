/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cdql.cqe;

import cdql.cqe.entities.AggregationFunction;
import cdql.cqe.entities.ContextEntity;
import cdql.cqe.exception.CDQLSyntaxtErrorException;
import cdql.graph.Edge;
import cdql.graph.Graph;
import cdql.graph.Vertex;
import cdql.odf.InfoItemType;
import cdql.odf.ObjectType;
import cdql.odf.ObjectsType;
import cdql.odf.QlmID;
import cdql.omi.IdType;
import cdql.omi.OmiEnvelope;
import cdql.omi.OmiFactory;
import cdql.util.IpAddressFinder;
import coaas.cdql.entities.Device;
import coaas.cdql.entities.Query;
import coaas.helper.FCM;
import com.google.gson.Gson;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.antlr.v4.runtime.ANTLRInputStream;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.tree.ParseTree;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 *
 * @author ali
 */
@Stateless
public class ContextQueryExecutor implements ContextQueryExecutorRemote {

    @PersistenceContext(name = "CoaaS-ejbPU")
    private EntityManager em;

    @Override
    public Graph execute(String query) throws CDQLSyntaxtErrorException {
        StringBuilder res = new StringBuilder();
        ANTLRInputStream input = new ANTLRInputStream(query); // create a lexer that feeds off of input CharStream
        CDQLLexer lexer = new CDQLLexer(input); // create a buffer of tokens pulled from the lexer
        CommonTokenStream tokens = new CommonTokenStream(lexer); // create a parser that feeds off the tokens buffer
        CDQLParser parser = new CDQLParser(tokens);
        ParseTree tree = parser.cdql(); // begin parsing at init rule        
        if (parser.getNumberOfSyntaxErrors() != 0) {
            throw new CDQLSyntaxtErrorException("syntaxt error");
        }
        CDQLVisitor stringCDQLBaseVisitor = new CDQLVisitor();
        // Walk the tree created during the parse, trigger callbacks
        res.append(tree.toStringTree(parser));
        stringCDQLBaseVisitor.visit(tree);
        String error = "";
        for (String s : stringCDQLBaseVisitor.getUsedContextEntities()) {
            if (!stringCDQLBaseVisitor.getDefinedEntities().containsKey(s)) {
                error += ("\n" + s + " not defined");
            }
        }
        if (!error.isEmpty()) {
            throw new CDQLSyntaxtErrorException(error);
        }
        error = "";
        for (String s : stringCDQLBaseVisitor.getCalledFunctions()) {
            if (!stringCDQLBaseVisitor.getDefinedFunctions().containsKey(s)) {
                error += ("\n" + s + " not defined");
            } else if (stringCDQLBaseVisitor.getDefinedFunctions().get(s) instanceof AggregationFunction) {
                //stringCDQLBaseVisitor.getDefinedFunctions().get(s)
            }
        }
        if (!error.isEmpty()) {
            throw new CDQLSyntaxtErrorException(error);
        }
        error = "";
        Map<String, Vertex> parsedEntites = new HashMap<>();
        List<ContextEntity> executionPlan = new ArrayList<>();
        Graph graph = new Graph();
        boolean flag = true;
        while (flag) {
            flag = false;
            for (Map.Entry<String, ContextEntity> entry : stringCDQLBaseVisitor.getDefinedEntities().entrySet()) {
                ContextEntity value = entry.getValue();
                if (value.getCondition() == null || value.getCondition().getDependency() == null || value.getCondition().getDependency().isEmpty()) {
                    if (!parsedEntites.containsKey(entry.getKey())) {
                        Vertex vertex = new Vertex(value);
                        graph.addVertex(vertex, false);
                        executionPlan.add(value);
                        parsedEntites.put(entry.getKey(), vertex);
                        res.append("\n" + entry.getKey());
                        flag = true;
                    }
                } else {
                    boolean flag2 = true;
                    Vertex vertex = new Vertex(value);
                    List<Edge> edges = new ArrayList<>();
                    for (Map.Entry<String,List<String>> s : value.getCondition().getDependency().entrySet()) {
                        if (!parsedEntites.containsKey(s.getKey())) {
                            flag2 = false;
                            break;
                        } else {
                            edges.add(new Edge(vertex, parsedEntites.get(s.getKey())));
                        }
                    }
                    if (flag2) {
                        if (!parsedEntites.containsKey(entry.getKey())) {
                            graph.addVertex(vertex, false);
                            for (Edge e : edges) {
                                graph.addEdge(e.getOne(), e.getTwo());
                            }
                            executionPlan.add(value);
                            parsedEntites.put(entry.getKey(), vertex);
                            flag = true;
                            res.append("\n" + entry.getKey());
                        }
                    }
                }
            }
        }
        if (parsedEntites.size() != stringCDQLBaseVisitor.getDefinedEntities().size()) {

            throw new CDQLSyntaxtErrorException("the relationship between entites cannot be solved");
        }
        Query q = new Query();
        q.setQuery(query);
        q.setQuerystatus("IN_PROGRESS");
        q = em.merge(q);
        em.flush();
        try {
            for (ContextEntity e : executionPlan) {
                switch (e.getType()) {
                    case DEVICE:
                        String where = "";
                        if (e.getCondition() != null && !e.getCondition().getRPNCondition().isEmpty()) {
                            where = " where " + e.getCondition().toJPAWhereClause();
                        }
                        List<Device> result = em.createQuery("SELECT " + e.getEntityID() + " from Device as " + e.getEntityID() + where).getResultList();
                        HashSet<String> requestedEntities = stringCDQLBaseVisitor.getDefinedContextAttributes().get(e.getEntityID());

                        JSONArray requesteContext = new JSONArray();
                        ObjectsType objectsType = new ObjectsType();

                        Map<String, ObjectType> objs = new HashMap<>();
                        for (String re : requestedEntities) {
                            try {
                                String replaceFirst = re.replaceFirst("\\.", "");
                                requesteContext.put(replaceFirst);
                                String[] split = replaceFirst.split("\\.");
                                InfoItemType infoItem = new InfoItemType();
                                if (split.length < 2) {
                                    infoItem = null;
                                } else {
                                    infoItem.setNameAttribute(split[1]);

                                }
                                if (objs.containsKey(split[0]) && infoItem != null) {
                                    objs.get(split[0]).getInfoItem().add(infoItem);
                                } else {
                                    ObjectType obj = new ObjectType();
                                    QlmID qlmID = new QlmID();
                                    qlmID.setValue(split[0]);
                                    obj.getId().add(qlmID);
                                    if (infoItem != null) {
                                        obj.getInfoItem().add(infoItem);
                                    }
                                    objs.put(split[0], obj);
                                }
                            } catch (Exception es) {

                            }
                        }
                        for (Map.Entry<String, ObjectType> obj : objs.entrySet()) {
                            objectsType.getObject().add(obj.getValue());
                        }
                        String ipAddress = "";
                        try {
                            InetAddress find = IpAddressFinder.find();
                            ipAddress = find.getHostAddress();
                        } catch (UnknownHostException ex) {
                            Logger.getLogger(ContextQueryExecutor.class.getName()).log(Level.SEVERE, null, ex);
                        }

                        OmiEnvelope createReadRequestEnvelope = OmiFactory.createReadRequestEnvelope(100, objectsType, "v1", "http://" + ipAddress
                                + ":59646/CoaaS-war/webresources/generic");
                        IdType idType = new IdType();
                        idType.setFormat("db");
                        idType.setValue(q.getQueryid().toString());
                        createReadRequestEnvelope.getRead().getRequestID().add(idType);
                        Gson gson = new Gson();
                        String toJson = gson.toJson(createReadRequestEnvelope);
                        JSONObject msg = null;
                        try {
                            msg = new JSONObject(toJson);
                        } catch (JSONException ex) {
                            Logger.getLogger(ContextQueryExecutor.class.getName()).log(Level.SEVERE, null, ex);
                        }
                        // infoItem.set
                        for (Device d : result) {
                            try {
                                FCM.pushFCMNotification(d.getFcmid(), msg);
                            } catch (Exception ex) {
                                Logger.getLogger(ContextQueryExecutor.class.getName()).log(Level.SEVERE, null, ex);
                            }
                        }
                        break;
                    case PERSON:
                        break;
                }
            }
        }
        catch(Exception e)
        {
            
        }
        return graph;
    }

}
