/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cdql.controller;

import cdql.cqe.ContextQueryExecutorRemote;
import cdql.dbhelper.DbHelperRemote;
import cdql.graph.Edge;
import cdql.graph.Graph;
import cdql.graph.Vertex;
import coaas.cdql.entities.Query;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.inject.Named;

/**
 *
 * @author ali
 */
@Named(value = "cDQLController")
@RequestScoped
public class CDQLController {

    @EJB
    private ContextQueryExecutorRemote qe;
    @EJB
    private DbHelperRemote db;
    private String query;
    private String result;
    private List<Query> queries;
    private String graphText;

    @PostConstruct
    public void init() {
        graphText="null";
        queries = db.getAllQueries();
        query = "pull (d.sensors.proximity , d.sensors.light , d.activity , d.location) define context entities (d is from $device where d.ownerId.lastname='hassani')";
    }

    public void executeQuery() {
        try {
            Graph graph = qe.execute(query);
            graphText = "{ \"nodes\": [";
            int i=0;
            int N=graph.getVertices().size();
            int L=3;
            for (Vertex v : graph.getVertices()) {
                double x=L * Math.cos(Math.PI * 2 * i / N );
                double y=L * Math.sin(Math.PI * 2 * i / N );
                graphText += "{ \"id\" : \"" + v.getEntity().getEntityID() + "\", \"label\": \"" + v.getEntity().getEntityID() + " " + v.getEntity().getType().name() + "\",\"size\": 3, \"x\":"+x+",\"y\":"+y+"},";
                i++;
            }
            graphText = graphText.substring(0, graphText.length() - 1) + "]";
            if (!graph.getEdges().isEmpty()) {
                graphText += ",\"edges\": [";
                int edgeNo = 1;
                for (Edge e : graph.getEdges()) {
                    graphText += "{\"id\": \"e" + edgeNo + "\", \"source\": \"" + e.getOne().getEntity().getEntityID() 
                            + "\", \"target\" : \"" + e.getTwo().getEntity().getEntityID() + 
                            "\", \"type\": \"arrow\",  \"label\": \""+
                            String.join(", ", e.getOne().getEntity().getCondition().getDependency().get(e.getTwo().getEntity().getEntityID()))+"\"},";
                    edgeNo++;
                }
                graphText = graphText.substring(0, graphText.length() - 1) + "]";
            }
            graphText += "}";

        } catch (Exception ex) {
            result = ex.getMessage();
            Logger.getLogger(CDQLController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public List<Query> getQueries() {
        return queries;
    }

    public void setQueries(List<Query> queries) {
        this.queries = queries;
    }

    public String getGraphText() {
        return graphText;
    }

    public void setGraphText(String graphText) {
        this.graphText = graphText;
    }
    
    

}
