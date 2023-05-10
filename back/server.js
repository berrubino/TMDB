const express = require("express");
const app = express();
const db = require("./db");
const models = require("./models");
const router = require("./routes");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(express.json());

app.use(cookieParser());

app.use(cors({ origin: `http://localhost:3000`, credentials: true }));

app.use("/api", router);

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("servidior corriendo en el  puerto 3001");
  });
});
