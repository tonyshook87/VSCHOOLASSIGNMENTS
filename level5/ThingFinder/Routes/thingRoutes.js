const express = require('express')
const thingFinder = express.Router()

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]


thingFinder.get("/", (req, res) => {
   res.send(inventoryItems)
    
});
thingFinder.get("/item/type", (req, res) => {
const name= req.query.name
const filterType= inventoryItems.filter(item => item.name === name)
res.send(filterType)


    });

    module.exports = thingFinder