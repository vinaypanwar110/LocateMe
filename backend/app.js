import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import dbconnect from "./db/db.js";
import userRoutes from "./Routes/userRoutes.js";
import cookieParser from "cookie-parser";
dotenv.config();
  
const app = express();

dbconnect();

app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());




app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.use('/user',userRoutes);

export default app;