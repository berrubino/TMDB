const express = require("express");
const router = express.Router();
const { Users } = require("../models");

router.get("/", (req, res) => {
  Users.findAll()
    .then((users) => res.status(200).send(users))
    .catch((error) => console.error(error));
});

router.get("/:id", (req, res) => {
  Users.findOne({ where: { id: req.params.id } })
    .then((users) => res.status(200).send(users))
    .catch((error) => console.error(error));
});

router.post("/", (req, res, next) => {
  Users.create(req.body)
    .then((user) => res.status(201).send(user))
    .catch((error) => console.error(error));
});

module.exports = router;
