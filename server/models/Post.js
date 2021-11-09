const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    description: {
        type: String,
        maxlength: 500,
        default: ""
    },
    image: {
        type:String,
        default: ""
    },
    likes: {
        type: Array,
        default: []
    }
}, {timestamps: true});

module.exports = mongoose.model("Post", PostSchema)