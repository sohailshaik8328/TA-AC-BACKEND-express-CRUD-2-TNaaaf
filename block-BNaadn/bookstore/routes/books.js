var express = require('express');
var router = express.Router();
var Book = require('../models/bookModel');

/* GET users listing. */
router.get('/', (req, res, next) => {
  Book.find({}, (err, books) => {
    if(err) return next(err);
    res.render('books', {books});
  })
});

router.get('/new', (req, res, next) => {
  res.render('bookForm');
})

router.post('/', (req, res, next) => {
  Book.create(req.body, (err, books) => {
    if(err) return next(err);
    res.redirect('books');
  })
})

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  Book.findById(id, (err, book) => {
    if(err) return next(err);
    res.render('singleBook', {book});
  })
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
