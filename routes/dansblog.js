let express = require('express');
let router = express.Router();
// let blogs = require('../models/dansblog');

//INDEX ROUTE show all blogs
router.get("/", function(req, res) {
    res.render("dansblog/index");
});

module.exports = router;