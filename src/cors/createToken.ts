const jwt = require('jsonwebtoken');

export const createAccessToken = (jwtsecret: String, expiredDate: String = '15m', payload: any, algorithm:String = 'HS256'):String => {
    return jwt.sign(payload, jwtsecret, {
        algorithm: algorithm,
        expiresIn: expiredDate,
    });
}