/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cdql.ws;

import cdql.dbhelper.DbHelperRemote;
import cdql.omi.OmiEnvelope;
import javax.ejb.EJB;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.POST;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author ali
 */
@Path("generic")
public class GenericResource {

    @Context
    private UriInfo context;
    @EJB
    private DbHelperRemote db;

    /**
     * Creates a new instance of GenericResource
     */
    public GenericResource() {
    }

    /**
     * Retrieves representation of an instance of cdql.ws.GenericResource
     *
     * @return an instance of java.lang.String
     */
    @POST
    @Consumes(MediaType.APPLICATION_XML)
    @Path("{qid}")
    public void getXml(String odf, @PathParam("qid") int qid) {
        //TODO return proper representation object
        db.setQueryResult(qid, odf);
    }

    /**
     * PUT method for updating or creating an instance of GenericResource
     *
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_XML)
    public void putXml(String content) {
    }

    @POST
    @Consumes(MediaType.APPLICATION_XML)
    public void postXml(String msg) {
    }
}
