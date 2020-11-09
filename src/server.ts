import express from "express";
import { config } from "dotenv";
import * as sqlite from "sqlite3";

config();

const app = express();
const port = process.env.PORT || 3000;
const dbPath = process.env.DB_PATH || "";

const db = new sqlite.Database(dbPath);

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/employee", (req, res) => {
  db.all("SELECT * FROM Employee", [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  })
})

app.listen(
  port,
  () => console.log(`Example app listening on port ${port}!`)
);