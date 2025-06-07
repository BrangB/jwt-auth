import jwt, { JwtPayload } from 'jsonwebtoken';

export const verifyAccessToken = (
  token: string,
  secret: string
): JwtPayload | string => {
  return jwt.verify(token, secret);
};

export const verifyRefreshToken = (
  token: string,
  secret: string
): JwtPayload | string => {
  return jwt.verify(token, secret);
};

export const isTokenExpired = (token: string): boolean => {
  const decoded = jwt.decode(token) as JwtPayload | null;
  if (!decoded?.exp) return true;
  return decoded.exp * 1000 < Date.now();
};

export const isValidJwtFormat = (token: string): boolean => {
  return /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/.test(token);
};

