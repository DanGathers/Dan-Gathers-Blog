let express = require('express');
let router = express.Router();
let Blog = require('../models/dansblog')

//INDEX ROUTE show all blogs
router.get("/", function(req, res) {
    Blog.find({}, function(err, allBlogs) {
        if(err) {
            console.log(err);
        } else {
            res.render('dansblog/index', {blogCard:allBlogs});
        }
    });
});


// CREATE ROUTE - add new blog post to database
router.post("/", function(req, res) {
    let title = req.body.title;
    let image = req.body.image;
    let description = req.body.description;
    let blogPost = req.body.blogpost;

    let newBlog = {title: title, image: image, description: description, blogpost: blogPost};
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

//SHOW ROUTE show blog
router.get("/:id", function(req, res) {
    Blog.findById(req.params.id).populate('comments').exec(function(err, foundBlog) {
        if(err) {
            console.log(err);
        } else {
            res.render("dansblog/show", {blogShow: foundBlog});
        }
    });
});

module.exports = router;