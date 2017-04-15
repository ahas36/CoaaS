/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cdql.security;

/**
 *
 * @author ali
 */
public class SecurityManager {
    public static String generateStringToken(Token token)
    {
        return null;
    }
    
    public static Token generateTokenFromString(String token)
    {
        return null;
    }
    //1 for success
    //0 for wrong token
    //-1 for exprie token
    public static int evaluateToken(Token token)
    {
        return 1;
    }
    
    public static int evaluateToken(String token)
    {
        return evaluateToken(generateTokenFromString(token));
    }
    
}
