/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cdql.dbhelper;

import coaas.cdql.entities.Query;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author ali
 */
@Stateless
public class DbHelper implements DbHelperRemote {

    @PersistenceContext(unitName = "CoaaS-ejbPU")
    private EntityManager em;

    public void persist(Object object) {
        em.persist(object);
    }

    public EntityManager getEm() {
        return em;
    }

    public void setEm(EntityManager em) {
        this.em = em;
    }

    @Override
    public List<Query> getAllQueries() {
        return em.createQuery("SELECT m FROM Query as m").getResultList();
    }

    @Override
    public void setQueryResult(int id, String res) {
        Query find = em.find(Query.class, id);
        find.setResult(res);
        find.setQuerystatus("finish");
        em.merge(find);
    }

}
