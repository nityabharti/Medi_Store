import express from "express";

const app = express();

app.listen(PORT, () =>
  console.log(`server is running successfully on PORT ${PORT}`)
);
