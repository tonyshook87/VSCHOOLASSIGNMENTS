const express = require("express");
const app = express();


app.use(express.json());
app.use("/", require("./Routes/bountyRouter"))






















// app.listen(3002,()=>{
//     console.log('Server is running on port 3002')
