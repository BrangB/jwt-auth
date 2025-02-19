# @brang/jwt-auth

A simple and secure JWT authentication library for Node.js, providing functions to create access tokens and refresh tokens.

## 🚀 Features
- Generate access tokens with a secret key.
- Refresh tokens for extended authentication sessions.
- Secure and easy to use.

## 📦 Installation
```sh
npm install @brang/jwt-auth
```

## 🔧 Usage
### Import the package
```js
const jwtAuth = require('@brang/jwt-auth');
```

### Create an Access Token
```js
const accessToken = jwtAuth.createAccessToken({ userId: 123 }, 'your-secret-key', '1h');
console.log(accessToken);
```
**Parameters:**
- `payload` (Object) - User data to encode in the token.
- `secretKey` (String) - Secret key for signing the token.
- `expiresIn` (String) - Expiration time (e.g., `"1h"`, `"7d"`).

### Refresh Token
```js
const newAccessToken = jwtAuth.refreshToken(oldToken, 'your-secret-key', '1h');
console.log(newAccessToken);
```
**Parameters:**
- `oldToken` (String) - Expired or near-expired token.
- `secretKey` (String) - Secret key used for verification.
- `expiresIn` (String) - Expiration time for the new token.

## 🛡️ Security Best Practices
- Use strong secret keys and store them securely (e.g., environment variables).
- Set appropriate expiration times for tokens.
- Always verify tokens before processing requests.

## 📜 License
MIT License © 2025 [Brang Tsawm Aung]

## 🤝 Contributing
Pull requests and issues are welcome! 😊

