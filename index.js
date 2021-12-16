import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import  mongoose  from "mongoose";
import userRouter from "./src/routes/userRoutes";
import tourRouter from "./src/routes/tourRoutes";

dotenv.config("./.env");

const app = express();

app.use(bodyParser.json());
app.use("/user",userRouter);
app.use("/tour",tourRouter);

app.use("/", (req,res)=> res.status(200).json({
    message:"This is API doesn't exit"
}) );

const dbUrl=process.env.DATABASEURL;

mongoose.connect(dbUrl).then ( () => console.log("Database connected successful")) 

app.listen(4040,()=>{
    console.log(`Server is running on port 4040`);
})
export default app;