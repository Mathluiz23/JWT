const jwt = require('jsonwebtoken');
const SECRET = require('../config/secret');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(500).json({ message: 'Token não foi enviado'});
  }

  try {
    const user = jwt.verify(authorization, SECRET);
  
    next();
  } catch (_) {
    return res.status(401).json({ code: 'invalid_token', message: 'Invalid Token'});
  }
}