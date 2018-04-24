const express       = require('express'),
      app           = express(),
      pug           = require('pug'),
      bodyParser    = require('body-parser'),
      mongoose      = require('mongoose')


mongoose.connect('mongodb://localhost/dansblog');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug');
app.use(express.static(__dirname + "/public"));



app.get("/", (req, res) => {
    res.send("This is the home page!")
});

app.listen(4000, () => {
    console.log("Dan Gathers Blog Server Has Started at PORT:4000!")
});