const express = require('express');
const router = express.Router();
const Product = require('../Models/product');
const Joi = require('joi');

router.get('/', (req, res) => {
    res.redirect('/products');
})
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});

    res.render('products/index', {products});
    }
    catch(e) {
        res.status(500).render('error', {err:e.message});
    }
});

router.get('/products/new', (req, res) => {
    try {
        res.render('products/new');
    }
    catch (e) {
        res.status(500).render('error', {err:e.message});
    }
});

router.post('/products', async(req, res) => {
    try {
        const {name, img, desc, price} = req.body;
        // console.log(req.body);
        // console.log(desc);

        const productSchema = Joi.object({
            name : Joi.string().required(),
            img : Joi.string().required(),
            price : Joi.string().min(0).required(),
            desc : Joi.string().required()
        });

        const {error} = productSchema.validate({name, price, img, desc});

        console.log(error);


        await Product.create({name, img, price : parseFloat(price), desc});
        res.redirect('/products');
    }
    catch (e) {
        res.status(500).render('error', {err:e.message});
    }
});

router.get('/products/:id', async (req, res) => {
    try {
        const {id} = req.params;
    // console.log(id);
    const product = await Product.findById(id).populate('reviews');
    console.log(product);
    res.render('products/show', {product});
    }
    catch (e) {
        res.status(500).render('error', {err:e.message});
    }
});

router.get('/products/:id/edit', async(req, res) => {
    try {
        const {id} = req.params;
    
    const product = await Product.findById(id);

    res.render('products/edit', {product});
    }
    catch (e) {
        res.status(500).render('error', {err:e.message});
    }
});

router.patch('/products/:id', async(req, res) => {
    try {
        const {id} = req.params;

    const {name, img, price, desc} = req.body;

    await Product.findByIdAndUpdate(id, {name, img, price, desc});

    res.redirect(`/products/${id}`);
    }
    catch (e) {
        res.status(500).render('error', {err:e.message});
    }
});

router.delete('/products/:id', async(req, res) => {
    try {
        const {id} = req.params;
    const product = await Product.findById(id);

    // for (let id of product.reviews) {
    //     await Review.findByIdAndDelete(id);           // we are using post middleware function to delete the product reviews
    // }                                     
    await Product.findByIdAndDelete(id);

    res.redirect(`/products`);
    }
    catch (e) {
        res.status(500).render('error', {err:e.message});
    }
});



module.exports = router;