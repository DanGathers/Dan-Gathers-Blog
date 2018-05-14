const mongoose = require('mongoose');


let blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    },
    description: String,
    blogpost: String,
    created: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Blog', blogSchema);