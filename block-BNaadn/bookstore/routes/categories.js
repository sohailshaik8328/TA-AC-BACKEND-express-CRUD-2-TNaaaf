let express = require('express');
let router = express.Router();
let Author = require('../models/authorModel');
let Book = require('../models/bookModel');

router.get('/fiction', (req, res, next) => {
        Book.find({category : "fiction"}).exec((err, book) => {
            console.log(`this is book ${book}`);
            if(err) return next(err);
            res.render('categories', {book});
        })
})

router.get('/technology', (req, res, next) => {
    Book.find({category : "technology"}).exec((err, book) => {
        console.log(`this is book ${book}`);
        if(err) return next(err);
        res.render('categories', {book});
    })
})

router.get('/motivation', (req, res, next) => {
    Book.find({category : "motivation"}).exec((err, book) => {
        console.log(`this is book ${book}`);
        if(err) return next(err);
        res.render('categories', {book});
    })
})

router.get('/adventure', (req, res, next) => {
    Book.find({category : "adventure"}).exec((err, book) => {
        console.log(`this is book ${book}`);
        if(err) return next(err);
        res.render('categories', {book});
    })
})


module.exports = router;