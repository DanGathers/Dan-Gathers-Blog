const mongoose = require('mongoose');


let blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    blogpost: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    created: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Blog', blogSchema);