const category_69 = require("../models/categoryModel_69");
const clothing_69 = require('../models/clothingModel_69');
exports.getHomepage = async (req,res) =>{
    let data;
    const [rows] = await category_69.fetchAll();
    data = rows;
    //res.json(data);
    res.render('crown2_69', 
    { title: '劉又豪 408410669 (async/await)' , 
      data
    });
}


exports.getProducts = async (req, res) => {
  console.log('req.params', req.params.product);
  let data = {};
  data.cid = 0;
  if(req.params.product === 'hats') data.cid = 1;
  else if (req.params.product === 'jackets') data.cid = 2;
  else if (req.params.product === 'sneakers') data.cid = 3;
  else if (req.params.product === 'womens') data.cid = 4;
  else if (req.params.product === 'mens') data.cid = 5;

  const [rows] = await clothing_69.fetchProduct(data.cid)
  data = rows;
  res.render('shops_69', { 
    title: req.params.product.toUpperCase() ,
    data
  });
  
}