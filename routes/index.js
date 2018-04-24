let express = require('express');
let router = express.Router();


// root route 
router.get("/", function(req, res) {
    res.render("landing");
});

module.exports = router;