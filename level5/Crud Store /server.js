const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
require("dotenv").config();

app.use(express.json());
app.use(morgan('dev'));

const databaseconnection = async ()=>{
    try {
        await mongoose.connect(process.env.mongodb)
        console.log('Connected to mongodb')
    } catch (error) {
        console.error("failed to connect to mongodb", error)
    }
} 

databaseconnection()













app.use("/", require("./Routes/productRouter"))


app.use((error, req, res, next )=>{
    console.log (error)
    return res.send({ error: error.message})
})




















app.listen(3002,() => {
        console.log('Server is running on port 3002')
    }
)