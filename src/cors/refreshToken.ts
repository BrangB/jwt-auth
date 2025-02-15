const jwt = require('jsonwebtoken');

export const createRefreshToken = (jwtsecret: String, expiredDate: String = '7d', payload: any, algorithm:String = 'HS256'):String => {
    return jwt.sign(payload, jwtsecret, {
        algorithm: algorithm,
        expiresIn: expiredDate,
    });
}