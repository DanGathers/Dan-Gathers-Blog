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
    let body = req.body.body;
})

//NEW ROUTE show form to create new blog post
router.get("/new", function(req, res) {
    res.render("dansblog/new");
});

module.exports = router;