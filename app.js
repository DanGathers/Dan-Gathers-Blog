const express       = require('express'),
      app           = express(),
      pug           = require('pug'),
      bodyParser    = require('body-parser'),
      methodOverride= require('method-override'),
      mongoose      = require('mongoose'),
      Blog          = require('./models/dansblog')
      passport      = require('passport'),
      GoogleStrategy= require('passport-google-oauth'),
      keys          = require ('./config/keys')

// APP CONFIG
mongoose.connect('mongodb://localhost/dansblog');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug');
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));

// required routes
const blogRoutes  = require('./routes/dansblog'),
      indexRoutes = require('./routes/index')


app.use("/blogs", blogRoutes);
app.use("/", indexRoutes);

// PASSPORT CONFIGURATION
passport.use(new GoogleStrategy({
      clientID: keys.google.clentID,
      clientSecrete: keys.google.clientSecret
      }), () =>  {

      }
)

app.listen(4000, () => {
    console.log("Dan Gathers Blog Server Has Started at PORT:4000!")
});