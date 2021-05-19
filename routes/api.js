var express = require('express');
var router = express.Router();

const apiController = require('../controllers/apiController');

router.get('/categories', apiController.getCategories);

module.exports = router;