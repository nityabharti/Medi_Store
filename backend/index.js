import express from "express";
import dotenv from "dotenv";
import "./database/db";

const app = express();
dotenv.config();

const PORT = 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD);

app.listen(PORT, () =>
  console.log(`server running successfully on PORT ${PORT} `)
);
