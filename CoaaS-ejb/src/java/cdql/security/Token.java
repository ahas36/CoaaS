/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cdql.security;

import java.util.Date;

/**
 *
 * @author ali
 */
public class Token {
    private long entityId;
    private Date expiryDate;

    public long getEntityId() {
        return entityId;
    }

    public void setEntityId(long entityId) {
        this.entityId = entityId;
    }

    public Date getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(Date expiryDate) {
        this.expiryDate = expiryDate;
    }

    public Token(long entityId, Date expiryDate) {
        this.entityId = entityId;
        this.expiryDate = expiryDate;
    }

    public Token() {
    }
    
    
}
