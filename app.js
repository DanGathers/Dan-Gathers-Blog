const express       = require('express'),
      app           = express(),
      pug           = require('pug'),
      bodyParser    = require('body-parser'),
      methodOverride= require('method-override'),
      mongoose      = require('mongoose'),
      Blog          = require('./models/dansblog')
      passport      = require('passport'),
      keys          = require ('./config/keys'),
      session       = require('express-session'),
      User          = require('./models/user')

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


app.listen(4000, () => {
    console.log("Dan Gathers Blog Server Has Started at PORT:4000!")
});