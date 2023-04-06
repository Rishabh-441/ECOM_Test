const mongoose = require('mongoose');
const Product = require('./Models/product');



const products = [
  {
    name: 'Iphone X',
    img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 900,
    desc: 'This is a dummy product description for Product 1.'
  },
  {
    name: 'Reebok Shoes',
    img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80',
    price: 1999,
    desc: 'This is a dummy product description for Product 2.'
  },
  {
    name: 'Wrist Watch',
    img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 2999,
    desc: 'This is a dummy product description for Product 3.'
  },
  {
    name: 'Macbook pro',
    img: 'https://images.unsplash.com/photo-1501163268664-3fdf329d019f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hY2Jvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: 3999,
    desc: 'This is a dummy product description for Product 4.'
  },
  {
    name: 'Drone',
    img: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyb25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    price: 4999,
    desc: 'This is a dummy product description for Product 5.'
  },
  {
    name: 'Sunglass',
    img: 'https://images.unsplash.com/photo-1587310311582-aa7610e90826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHN1bmdsYXNzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: 5999,
    desc: 'This is a dummy product description for Product 6.'
  }
];

async function seedDB() {
    // await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("DB Seeded");
}

module.exports = seedDB;
