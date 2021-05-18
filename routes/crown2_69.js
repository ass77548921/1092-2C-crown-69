var express = require('express');
var router = express.Router();
const mysql = require('mysql2');

const categories=require('../data/categories_69');

//const db=require('../utils/database_69');

const category_69=require('../models/categoryModel_69');
/* GET home page. */


const crown2Controller_69=require('../controllers/crown2Controller_69');
const Clothing_69= require('../models/clothingModel_69');
router.get('/', function(req, res, next) {
  res.render('crown2_69', 
  { title: '劉又豪 408410669 (static)' , 
    data: categories
  }
  );
});

router.get('/homepage', crown2Controller_69.getHomepage);

router.get('/shop_69/:product',crown2Controller_69.getProducts);




module.exports = router;
