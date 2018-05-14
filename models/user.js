let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    user: String,
    password: String
});

module.exports = mongoose.model('User', userSchema);