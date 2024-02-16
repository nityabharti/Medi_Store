import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import Connection from "./database/db";
import DefaultData from "./default";
import Router from "./routes/route";

const app = express();
dotenv.config();

app.use(cors());
app.use("/", Router);

const PORT = 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);

app.listen(PORT, () =>
  console.log(`server running successfully on PORT ${PORT} `)
);
