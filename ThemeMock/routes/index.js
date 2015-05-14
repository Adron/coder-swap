var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ref', function(req, res, next) {
  res.render('index', { title: 'Secondary' });
});

module.exports = router;
