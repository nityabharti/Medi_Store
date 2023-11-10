import express from "express";

const app = express();
dotenv.config();

const PORT = 8000;
const USERNAME = process.env.DB_USERNAME;
console.log(USERNAME);
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD);

app.listen(PORT, () =>
  console.log(`server running successfully on PORT ${PORT} `)
);
