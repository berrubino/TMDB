const express = require("express");
const app = express();
const db = require("./db");
const models = require("./models");
const router = require("./routes");
const PORT = process.env.PORT || 3001;
const cors = require("cors");

app.use(express.json());

app.use(cors({ origin: true }));

app.use("/api", router);

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("servidior corriendo en el  puerto 3001");
  });
});
