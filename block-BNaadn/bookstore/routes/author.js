let express = require('express');
let router = express.Router();
let Author = require('../models/authorModel');
let Book = require('../models/bookModel');

router.get('/new', (req, res, next) => {
    res.render('authorForm');
  }) 
  
  router.post('/', (req, res, next) => {
    Author.create(req.body, (err, author) => {
      console.log(author);
      res.redirect('/books/new');
    })
  })
  


module.exports = router;