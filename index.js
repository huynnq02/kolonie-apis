//#region import package
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import http from "http";

//#region initialize server
dotenv.config();

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
//#end region

//#region setup middleware
// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
//#end region

//#region import router
//#end region

//#region setup router
//#end region

//#region connect to database
mongoose.set("strictQuery", false); // Add this line to address the deprecation warning

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB!!!");
  })
  .catch(() => {
    console.log("Error connecting to MongoDB");
  });
//#end region

//#region start server
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server's running on port: http://localhost:${PORT}`);
});
//#end region
