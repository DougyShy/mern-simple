import path from "path";
import express from "express";
import { MongoClient } from "mongodb";
import template from "./../template.js";

const CURRENT_WORKING_DIR = process.cwd();

const app = express();

app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));
//app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
  //res.status(200).send(template());
  res.status(200).send("Hello from the backend!");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(CURRENT_WORKING_DIR, "dist", "index.html"));
});

let port = process.env.PORT || 3000;

app.listen(port, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", port);
});

// Database Connection URL
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/bookstore";
// Use connect method to connect to the server
MongoClient.connect(url, (err, db) => {
  console.log("Connected successfully to mongodb server");
  db.close();
});
