var express = require('express');
var router = express.Router();
var Book = require('../models/bookModel');
var Author = require('../models/authorModel');

/* GET users listing. */
router.get('/', (req, res, next) => {
  Book.find({}).populate('authorId').exec((err, books) => {
    if(err) return next(err);
    res.render('books', {books});
  })
});

router.get('/new', (req, res, next) => {
  Author.find({}, (err, authors) => {
    res.render('bookForm', {authors});
  })
})

router.post('/', (req, res, next) => {
  Book.create(req.body, (err, book) => {
    req.body.category = req.body.category.trim().toLowerCase();
    if(err) return next(err);
    Author.findByIdAndUpdate(req.body.authorId, {$push : {bookId : book.id}}, (err, author) => {
      if(err) return next(err);
      res.redirect('books');
    })
  })
})

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  Book.findById(id, (err, book) => {
    if(err) return next(err);
    res.render('singleBook', {book});
  })
//   Book.findById(id).populate('Author').exec((err, book) => {
//     if(err) return next(err);
//     res.render('singleBook', {book});
//   })
})

router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id;
  Book.findById(id, (err, book) => {
    if(err) return next(err);
    res.render('editBookForm', {book})
  })
})

router.post('/:id', (req, res, next) => {
  let id = req.params.id;
  Book.findByIdAndUpdate(id, req.body, (err, book) => {
    if(err) return next(err);
    res.redirect('/books/' + id);
  })
})

router.get('/:id/delete', (req, res, next) => {
  let id = req.params.id;
  Book.findByIdAndRemove(id, (err, book) => {
    if(err) return next(err);
    res.redirect('/books');
  })
})



module.exports = router;
