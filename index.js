if (process.env.NODE_ENV != 'production') {
    require('dotenv').config({path : './config.env'});
}


const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');



// const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1:27017/shopping-app';
const dbUrl = 'mongodb://127.0.0.1:27017/shopping-app';

const port = 3000;

// const session = process.env.SESSION_SECRET;

//connect to db
mongoose.connect(dbUrl, {useNewUrlParser : true, useUnifiedTopology : true})
.then(() => {
    console.log("DB connected!");
})
.catch((err) => {
    console.log(err);
    console.log('some error occured!');
});


app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: false }));

const productRoutes = require('./routes/productRoutes');
app.use(productRoutes);

// seedDB();


app.get('/products/cart', (req, res) => {
    res.send('hello');
});


const cartRoutes = require('./routes/cartRoutes');
app.use(cartRoutes);

// const port = 3000;
app.listen(port, () => {
    console.log(`server is running at port no. ${port}`);
});