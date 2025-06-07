import jwt, { JwtPayload } from 'jsonwebtoken';

export const decodeToken = (token: string): null | JwtPayload | string => {
  return jwt.decode(token);
};
