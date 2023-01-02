import express from "express";
const app = express();
import dotenv from "dotenv";
import dbConnection from "./database/db.js";
import defaultData from "./defaultData.js";

dotenv.config();
dbConnection();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is lestening at http://localhost:${PORT}`);
});

defaultData();
  