var express = require('express');
let Article = require('../public/javascripts/articleModel');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', (req, res) => {
  res.render('articlesForm')
})

module.exports = router;
