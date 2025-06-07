const jwt = require('jsonwebtoken');

type Payload = string | object | Buffer;

interface TokenOptions {
  expiresIn?: string | number;
  algorithm?: Algorithm | string;
}

const defaultRefreshTokenOptions: TokenOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export const createRefreshToken = (secret: string, payload: Payload,options: TokenOptions = defaultRefreshTokenOptions): string => {
  return jwt.sign(payload, secret, {
    algorithm: options.algorithm,
    expiresIn: options.expiresIn,
  });
};