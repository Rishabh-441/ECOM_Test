const express = require('express');
const router = express.Router();


router.get('/products/cart', (req, res) => {
    res.render('products/cart');
});

module.exports = router;