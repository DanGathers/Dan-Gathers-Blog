const express       = require('express'),
     app            = express(),
     pug            = require('pug')

     app.get("/", (req, res) => {
         res.send("This is the home page!")
     });

     app.listen(4000, () => {
         console.log("Dan Gathers Blog Server Has Started at PORT:4000!")
     });