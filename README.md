# @brang/jwt-auth

A simple and secure JWT authentication library for Node.js, providing functions to create access tokens and refresh tokens.

## 🚀 Features
🔐 Create JWT tokens with a secret key.
🪪 Generate access tokens with customizable expiration and algorithm.
📥 Decode JWT tokens without verifying the signature.
✅ Verify token authenticity and integrity.
⌛ Check if a token is expired.

## 📦 Installation
```sh
npm install jwt-auths
```

## 🔧 Usage
### Import the package
```js
const jwtAuth = require('jwt-auths');
```

### Create an Access Token
```js
const accessToken = jwtAuth.createAccessToken('your-secret-key', { userId: 123 }, { expiresIn: '1h', algorithm: 'HS256' });
```
The createAccessToken function generates a new JWT access token. It now takes the secret key first, followed by the payload (your user data), and an optional options object for configuration.

**Parameters:**
- `secretKey` (String) - The secret key used for signing the token. This should be a strong, securely stored string.
- `payload` (Object) - A JavaScript object containing the user data you want to encode in the token. It's best practice to include non-sensitive data here, such as `userId`, `role`, or `username`.
- `options` (Object, optional) - An object to customize the token's properties. If not provided, the default options will be used.
    - `expiresIn` (String | Number) - The expiration time for the token (e.g., `"1h"`, `"7d"`, or `3600` for 1 hour in seconds). By default, this is set to `'15m'` (15 minutes), as defined in 
    - `algorithm` (String) - The algorithm used to sign the token (e.g., `"HS256"`, `"RS256"`). The default algorithm is `'HS256'`.

#### The default options object looks like this:
```js
const defaultAccessTokenOptions = {
  expiresIn: '15m',
  algorithm: 'HS256',
};
```
### Create an Access Token
```js
const refreshToken = jwtAuth.createRefreshToken('your-secret-key', { userId: 123 }, { expiresIn: '7d', algorithm: 'HS256' });
```

### Verify Access Token & Refresh Token
```js
const payload = jwtAuth.verifyAccessToken(token, 'your-secret-key');
```
```js
const payload = jwtAuth.verifyRefreshToken(token, 'your-secret-key');
```

### Check If a Token Is Expired
```js
const isExpired = jwtAuth.isTokenExpired(token);
```
### Validate JWT Format
```js
const isValidFormat = jwtAuth.isValidJwtFormat(token);
```
### Decode a Token (Without Verifying)
```js
const decoded = jwtAuth.decodeToken(token);
```

## 🛡️ Security Best Practices
- Use strong secret keys and store them securely (e.g., environment variables).
- Set appropriate expiration times for tokens.
- Always verify tokens before processing requests.

## 📜 License
MIT License © 2025 [Brang Tsawm Aung]

## 🤝 Contributing
Pull requests and issues are welcome! 😊

