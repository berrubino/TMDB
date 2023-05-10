const express = require("express");
const { Favorites } = require("../models/");
const router = express.Router();

router.get("/", (req, res) => {
  Favorites.findAll()
    .then((fav) => {
      console.log(fav);
      res.status(200).send(fav);
    })
    .catch(console.error);
});

router.get("/:id", (req, res) => {
  Favorites.findOne({ where: { id: req.params.id } })
    .then((fav) => {
      console.log(fav);
      res.status(201).send(fav);
    })
    .catch(console.error);
});

router.post("/", (req, res) => {});

module.exports = router;
