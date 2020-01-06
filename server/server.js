require('dotenv/config')
const express = require("express");
const app = express();
const ctrl = require("./controller");
const massive = require("massive");
const { port, CONNECTION_STRING } = process.env;

app.use(express.json());

app.get("/api/employees", ctrl.getData);

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  app.listen(port, () => console.log(`This is ${port}`));
});
