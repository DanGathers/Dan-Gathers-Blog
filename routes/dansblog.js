let express = require('express');
let router = express.Router();
// let blogs = require('../models/dansblog');

//INDEX ROUTE show all blogs
router.get("/", function(req, res) {
    res.render("dansblog/index");
});


// CREATE ROUTE - add new blog post to database
router.post("/", function(req, res) {
    let title = req.body.title;
    let image = req.body.image;
    let desc = req.body.description;
    let blogPost = req.body.blogpost;
    let create = req.body.create

    let newBlog = {title: title, image: image, description: desc, blogpost: blogPost, created: created};
    Blog.create(newBlog, function(err, newlyCreatedBlog) {
        if(err) {
            console.log(err);
        } else {
            res.redirect("/blogs");
        }
    });
});

//NEW ROUTE show form to create new blog post
router.get("/new", function(req, res) {
    res.render("dansblog/new");
});

module.exports = router;