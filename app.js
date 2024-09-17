import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
// TODO: import the route for users

dotenv.config();

const app = express()
const logger = morgan("dev")


app.use(express.json())
app.use(logger)

app.set('trust proxy', 1);
app.enable('trust proxy');


app.use(
    cors({
      origin: [process.env.REACT_URL],
    })
  );

// TODO: insert use route for users 

  mongoose
  .connect(process.env.MONGODB_URI)
    .then((x) => console.log(`Connected to Mongo 🫡! Database name: "${x.connections[0].name}"`))
    .catch((err) => console.error("Error connecting to mongo 😣", err));
  

  app.listen(process.env.PORT, ()=>{
    console.clear()
    console.log(`Server is running on port ${process.env.PORT} 🫡`)
})

