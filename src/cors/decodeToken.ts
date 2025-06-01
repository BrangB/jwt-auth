const jwt = require('jsonwebtoken');

export const decodeToken = (token: string) => {
  return jwt.decode(token);
};
