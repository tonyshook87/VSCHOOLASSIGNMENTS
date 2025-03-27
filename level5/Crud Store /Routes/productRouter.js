const express= require('express');
const productRouter= express.Router();
const Product= require('../Models/inventory');


//GET all products
productRouter.get('/', async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
       
                next(error);
    }
});


productRouter.get("/:id", async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send('Product not found');
        res.status(200).send(product);
    } catch (error) {
        next(error);
    }
})

productRouter.post("/", async (req, res, next) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        next(error);
    }
})

productRouter.put("/:id", async (req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) return res.status(404).send('Product not found');
        res.send(product);
    } catch (error) {
        next(error);
    }
})

productRouter.delete("/:id", async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).send('Product not found');
        res.send(product);
    } catch (error) {
        next(error);
    }
})





module.exports = productRouter;