const express = require('express');
const router = express.Router();

const person = {
    name: "Tony",
    age: "37",
    height: "6 feet",
}

const middleware = 


(req,res,next) => {
    
    const newProperty = "weight"
    const value = "230"
    req.person= person
    req.person[newProperty] =value
    next();
}

router.use(middleware)
router.get("/", (req, res, next)=>{
    res.send(person);
    next();
})



module.exports = router