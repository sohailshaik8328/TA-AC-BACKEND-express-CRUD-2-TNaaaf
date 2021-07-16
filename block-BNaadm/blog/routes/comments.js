let express = require('express');
let router = express.Router();

let Comment = require('../models/comments-model')

router.get('/:id/edit', (req, res, next) => {
    let id = req.params.id;
    Comment.findById(id, (err, comment) => {
        if(err) return next(err);
        res.render('commentEditForm', {comment})
    })
})

router.post('/:id', (req, res, next) => {
    let id = req.params.id;
    Comment.findByIdAndUpdate(id, req.body, (err, comment) => {
        if(err) return next(err);
        res.redirect('/articles/' + comment.articleId)
    })
})

router.get('/:id/delete', (req, res, next) => {
    let id = req.params.id;
    Comment.findByIdAndRemove(id, (err, comment) => {
        if(err) return next(err);
        res.redirect('/articles/' + comment.articleId)
    })
})


module.exports = router;
