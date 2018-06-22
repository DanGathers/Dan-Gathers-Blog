const express = require('express');
const router = express.Router({mergeParams: true});
let Blog = require('../models/dansblog');
let Comment = require ('../models/comment');

router.get("/new", (req, res) => {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if(err) {
            console.log(err);
        } else {
            res.render("comments/new", {blogComment: foundBlog});          
        }
    });
});

router.post("/", (req, res) => {
    Blog.findById(req.params.id, (err, blogComment) => {
        if(err){
            console.log(err);
            res.redirect("/blogs");
        } else {
            Comment.create(req.body.comment, (err, comment) => {
                if(err){
                    console.log(err);
                } else {
                    blogComment.comments.push(comment);
                    blogComment.save();
                    res.redirect('/blogs');
                }
            })
        }
    })
});

module.exports = router;