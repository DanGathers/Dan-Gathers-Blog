const express       = require('express'),
      app           = express(),
      pug           = require('pug'),
      bodyParser    = require('body-parser'),
      methodOverride= require('method-override'),
      mongoose      = require('mongoose'),
      Blog          = require('./models/dansblog')
      passport      = require('passport'),
      localStrategy = require('passport-local'),
      session       = require('express-session'),
      User          = require('./models/user'),
      Comment       = require('./models/comment')

// APP CONFIG
mongoose.connect('mongodb://localhost/dansblog');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug');
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));
app.use(session({secret: 'whatever', resave: true, saveUninitialized: true}));
// required routes
const blogRoutes    = require('./routes/dansblog'),
      indexRoutes   = require('./routes/index'),
      commentRoutes = require('./routes/comments')


app.use("/blogs", blogRoutes);
app.use("/", indexRoutes);
app.use("/blogs/:id/comments/", commentRoutes);

// PASSPORT CONFIGURATION
app.use(require('express-session')({
      secret: "whatever",
      resave: false,
      saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.listen(4000, () => {
    console.log("Dan Gathers Blog Server Has Started at PORT:4000!")
});