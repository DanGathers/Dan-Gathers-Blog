const express       = require('express'),
      app           = express(),
      pug           = require('pug'),
      bodyParser    = require('body-parser'),
      mongoose      = require('mongoose'),
      Blog          = require('./models/dansblog')


// APP CONFIG
mongoose.connect('mongodb://localhost/dansblog');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug');
app.use(express.static(__dirname + "/public"));

// required routes
const blogRoutes  = require('./routes/dansblog'),
      indexRoutes = require('./routes/index')


app.use("/blogs", blogRoutes);
app.use("/", indexRoutes);


app.listen(4000, () => {
    console.log("Dan Gathers Blog Server Has Started at PORT:4000!")
});