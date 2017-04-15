/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cdql.communication;

import cdql.cqe.ContextQueryExecutor;
import cdql.cqe.exception.CDQLSyntaxtErrorException;
import cdql.message.CdqlMessage;
import cdql.message.CdqlMessageType;
import cdql.message.CdqlResponse;
import cdql.message.MessageConvertor;
import java.util.HashSet;
import cdql.security.*;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ejb.EJB;

/**
 *
 * @author ali
 */
public class CommunicationManager {
    
    @EJB
    private static ContextQueryExecutor cqe;

    private static final HashSet<CdqlMessageType> secureMessageType = new HashSet<CdqlMessageType>() {
        {
            add(CdqlMessageType.CONTEXT_QUERY);
            add(CdqlMessageType.CONTEXT_REQUEST);
            add(CdqlMessageType.SERVICE_REGISTERATION);
            add(CdqlMessageType.CONTEXT_UPDATE);
            add(CdqlMessageType.CONTEXT_RESPONSE);
        }
    };

    public static CdqlResponse handelIncomingMessages(String jsonMsg) {
        CdqlMessage message = MessageConvertor.messageTranlator(jsonMsg);
        if (needsToken(message.getMessageType())) {
            Token token = cdql.security.SecurityManager.generateTokenFromString(message.getToken());
            switch (cdql.security.SecurityManager.evaluateToken(token)) {
                case 0:
                    return null;
                case -1:
                    return null;
            }
        }

        switch (message.getMessageType()) {
            case CONTEXT_QUERY:
        {
            try {
                cqe.execute(message.getPayload());
            } catch (CDQLSyntaxtErrorException ex) {
                Logger.getLogger(CommunicationManager.class.getName()).log(Level.SEVERE, null, ex);
                return null;
            }
        }
                break;
            case CC_REGISTERATION:
                break;
            case CONTEXT_REQUEST:
                break;
            case CONTEXT_RESPONSE:
                break;
            case CONTEXT_UPDATE:
                break;
            case CP_REGISTERATION:
                break;
            case SERVICE_REGISTERATION:
                break;
        }
        return new CdqlResponse();
    }

    private static boolean needsToken(CdqlMessageType messageType) {
        return secureMessageType.contains(messageType);
    }
}
