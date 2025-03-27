const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const morgan = require("morgan");



app.use(express.json());
app.use(morgan("dev"));
 app.use("/", require("./Routes/toDoRouter.js"));

app.listen(3004,()=>{
    console.log('Server is running on port 3004')})