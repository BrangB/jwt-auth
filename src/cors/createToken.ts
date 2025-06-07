const jwt = require('jsonwebtoken');

type Payload = string | object | Buffer;

interface TokenOptions {
  expiresIn?: string | number;
  algorithm?: Algorithm | string;
}

const defaultAccessTokenOptions: TokenOptions = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

export const createAccessToken = (secret: string, payload: Payload, options: TokenOptions = defaultAccessTokenOptions): string => {
  return jwt.sign(payload, secret, {
    algorithm: options.algorithm,
    expiresIn: options.expiresIn,
  });
};