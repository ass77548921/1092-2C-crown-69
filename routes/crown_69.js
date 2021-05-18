var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_69', { title: '劉又豪 408410669' });
});

module.exports = router;
