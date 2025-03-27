const express= require('express');
const app= express();


app.use(express.json());











app.use("/",require("./Routes/pickedoffRouter"))
app.listen(9001,()=>{
    console.log('Server is running on port 9001')
})