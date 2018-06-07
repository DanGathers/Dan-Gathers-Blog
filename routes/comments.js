const express = require('express');
const router = express.Router();
let Blog = require('../models/dansblog');
let Comment = require ('../models/comment');

router.get("/new", (req, res) => {
    res.render("comments/new");
});

module.exports = router;