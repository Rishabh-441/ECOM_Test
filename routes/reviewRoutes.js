const express = require('express');
const router = express.Router();
const Product = require('../Models/product');
const Review = require('../Models/review');

router.post('/products/:id/review', async (req, res) => {
    // console.log(req.body);
    // res.send('Review Route');

    const {id} = req.params;
    const {rating, comment} = req.body; 

    const product = await Product.findById(id);

    // const review = new Review({...req.body});
    const review = new Review({rating, comment});

    console.log(review);

    product.reviews.push(review);

    await review.save();
    await product.save();

    console.log("reveiw added");
    res.redirect(`/products/${id}`);
});

module.exports = router;