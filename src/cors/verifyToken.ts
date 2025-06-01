const jwt = require('jsonwebtoken');

export const verifyAccessToken = (token: string, jwtSecret: string) => {
  return jwt.verify(token, jwtSecret);
};

export const verifyRefreshToken = (token: string, jwtSecret: string) => {
  return jwt.verify(token, jwtSecret);
};

export const isTokenExpired = (token: string): boolean => {
  const decoded = jwt.decode(token) as any;
  if (!decoded?.exp) return true;
  return decoded.exp * 1000 < Date.now();
};

export const isValidJwtFormat = (token: string): boolean => {
  return /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/.test(token);
};


