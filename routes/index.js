const express = require('express');
const router = express.Router();
const passport = require('passport');



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

// OAuth with Google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/google/auth', passport.authenticate('google'), (req, res) => {
    res.send("you've reached the callback URI");
});

// OAuth with Twitter
router.get('/twitter/auth', passport.authenticate('twitter'));

router.get('http://127.0.0.1:4000/twitter/auth', passport.authenticate('twitter', {
    successRedirect: '/twitter',
    failureRedirect: '/register'
}));

module.exports = router;