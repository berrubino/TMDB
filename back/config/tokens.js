const SECRET = "Hola ber";
const jwt = require("jsonwebtoken");

function generateToken(payload) {
  return jwt.sign({ user: payload }, SECRET, {
    expiresIn: "2h",
  });
}

function validateToken(token) {
  return jwt.verify(token, SECRET);
}

module.exports = { generateToken, validateToken };
