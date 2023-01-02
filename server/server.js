import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import dbConnection from "./database/db.js";
import defaultData from "./defaultData.js";
import router from "./routes/route.js";

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));

dotenv.config();
dbConnection();
app.use("/", router);


const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is lestening at http://localhost:${PORT}`);
});

// defaultData();
