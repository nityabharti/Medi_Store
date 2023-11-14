import express from "express";
import dotenv from "dotenv";

import Connection from "./database/db";
import DefaultData from "./default";
import Router from "./routes/route";

const app = express();
dotenv.config();

app.use("/", Router);

const PORT = 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD);

app.listen(PORT, () =>
  console.log(`server running successfully on PORT ${PORT} `)
);
