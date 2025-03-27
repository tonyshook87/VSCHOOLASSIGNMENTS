const mongoose= require('mongoose');


const inventorySchema= new mongoose.Schema({
    name: {
        type: String,
        
    }, 
    image: {
        type: String,
        
    },
    price: {
        type: Number,
        
    },
    category: {
        type: String,
        
    }
})



module.exports = mongoose.model("Product",inventorySchema)