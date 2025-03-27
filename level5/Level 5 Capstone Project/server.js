const express= require('express');
const app= express();
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();

app.use(express.json());
app.use(morgan('dev'));


app.use("/api/song", require("./Routes/songRouter"));

const connectdb = async ()=> {
    try {
        await mongoose.connect(process.env.URI );
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
}


connectdb()

app.listen(5000,()=>{
    console.log('Server running on port 5000');
})