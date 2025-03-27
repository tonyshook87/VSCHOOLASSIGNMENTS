const express = require("express");
const app = express();

const morgan = require("morgan");
const mongoose= require("mongoose");
require("dotenv").config();


app.use(express.json());
app.use(morgan("dev"));
 app.use("/api/bounties", require("./Routes/bountyRouter"))

const databaseconnection = async ()=>{
    try {
        await mongoose.connect(process.env.mongodb)
        console.log('Connected to mongodb')
    } catch (error) {
        console.error("failed to connect to mongodb", error)
    }
} 

databaseconnection()
app.listen(3004,()=>{
    console.log('Server is running on port 3004')})





















