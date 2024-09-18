import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as dotenv from "dotenv";
import connectDB from "./config/mongoose.js";
import userRouter from "./routes/users.js"


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

app.use( "/user", userRouter);

  app.listen(process.env.PORT, ()=>{
    console.clear()
    console.log(`Server is running on port ${process.env.PORT}! 🫡`)
    connectDB()
})

