const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const { generateToken, validateToken } = require("../config/tokens");
const validateCookie = require("../middlewares/auth");

router.get("/", (req, res) => {
  Users.findAll()
    .then((users) => res.status(200).send(users))
    .catch((error) => console.error(error));
});

router.get("/secret", (req, res) => {
  res.send(validateToken(req.cookies.user));
});

router.get("/me", validateCookie, (req, res) => {
  res.send(req.user);
});

router.post("/signup", (req, res) => {
  const { user } = req.body;
  Users.findOrCreate({
    where: { user: user },
    defaults: req.body,
  })
    .then((user) => res.status(201).send(user))
    .catch((err) => {
      console.error(err);
      res.sendStatus(504);
    });
});

router.post("/login", (req, res) => {
  const { user, password } = req.body;

  Users.findOne({
    where: { user: user },
  }).then((user) => {
    if (!user) return res.send(401);

    user.validatepassword(password).then((isValid) => {
      if (!isValid) return res.send(401);

      const payload = {
        name: user.dataValues.user,
        email: user.dataValues.email,
      };

      const token = generateToken(payload);

      res.cookie("token", token);
      res.status(201).send(payload);
    });
  });
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.send(204);
});

module.exports = router;
