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

router.post("/blogs/:id/comments", (req, res) => {

});

module.exports = router;