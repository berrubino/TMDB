let { validateToken } = require("../config/tokens");

function validateCookie(req, res, next) {
  const token = req.cookies.token;
  const payload = validateToken(token);
  req.user = payload;
  if (payload) return next();
  else res.sendStatus(401);
}

module.exports = validateCookie;
