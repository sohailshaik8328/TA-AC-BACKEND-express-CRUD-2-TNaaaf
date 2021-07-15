var express = require('express');
let Article = require('../models/articleModel');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) =>  {
  Article.find({}, (err, articles) => {
    if(err) return next(err);
    res.render('articles', {articles : articles});
  })
});

router.get('/new', (req, res) => {
  res.render('articlesForm')
})

router.post('/', (req, res, next) => {
  Article.create(req.body, (err, articles) => {
    if(err) return next(err);
    res.redirect("articles");
  })
})

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  Article.findById(id, (err, article) => {
    if(err) return next(err);
    res.render('singleArticle', {article : article});
  })
})

router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id;
  Article.findById(id, (err, articles) => {
    if(err) return next(err);
    res.render('articleEditForm', {articles} )
  })
})

router.post('/:id', (req, res, next) => {
  let id = req.params.id;
  Article.findByIdAndUpdate(id, req.body, (err, articleUpdated) => {
    if(err) return next(err);
    res.redirect('/articles/' + id);
  })
})

router.get('/:id/delete', (req, res, next) => {
  let id = req.params.id;
  Article.findByIdAndDelete(id, (err, articles) => {
    if(err) return next(err);
    res.redirect('/articles');
  })
})

router.get('/:id/increment', (req, res, next) => {
  let id = req.params.id;
  Article.findByIdAndUpdate(id, {$inc : {likes : 1}}, (err, updatedLikes) => {
    if(err) return next(err);
    res.redirect('/articles/' + id);
  })
})


module.exports = router;
