const express       = require('express'),
      app           = express(),
      pug           = require('pug'),
      bodyParser    = require('body-parser'),
      methodOverride= require('method-override'),
      mongoose      = require('mongoose'),
      Blog          = require('./models/dansblog')
      passport      = require('passport'),
      GoogleStrategy= require('passport-google-oauth').OAuth2Strategy,
      TwitterStrategy=require('passport-twitter').Strategy,
      keys          = require ('./config/keys'),
      session      = require('express-session')

// APP CONFIG
mongoose.connect('mongodb://localhost/dansblog');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug');
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));
app.use(session({secret: 'whatever', resave: true, saveUninitialized: true}));
// required routes
const blogRoutes  = require('./routes/dansblog'),
      indexRoutes = require('./routes/index')


app.use("/blogs", blogRoutes);
app.use("/", indexRoutes);

// PASSPORT CONFIGURATION
passport.use(new GoogleStrategy({
      callbackURL: '/google/auth',
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
      }, (accessToken, refreshToken, profile, done) =>  {

      })
);

// TWITTER CONFIGURATION
passport.use(new TwitterStrategy({
      consumerKey: keys.twitter.consumerKey,
      consumerSecret: keys.twitter.consumerSecret,
      callbackURL: 'http://127.0.0.1:4000/twitter/auth'
      },
      function(token, tokenSecret, profile, cb) {
            User.findOrCreate({ twitterID: profile.id}, function (err, user) {
                  return cb(err, user);
            });
      }
));

app.listen(4000, () => {
    console.log("Dan Gathers Blog Server Has Started at PORT:4000!")
});