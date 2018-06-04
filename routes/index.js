const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');


// root route 
router.get("/", function(req, res) {
    res.render("landing");
});

// REGISTER ROUTE
router.get("/register", (req, res) => {
    res.render("register");
});

// LOGIN ROUTES
router.get("/login", (req, res) => {
    res.render("login");
});

// LOGOUT ROUTE
router.get("/logout", (req, res) => {
    // handle with Passport
    res.send("Logging Out");
});



module.exports = router;