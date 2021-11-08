const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
        unique: true
    },
    name:{
        type: String,
        default:""
    },
    email:{
        type: String,
        required: true,
        unique: true,
        maxlength: 50
    },
    password:{
        type: String,
        required: true,
        minlength: 8
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    }

}, {timestamps: true});

module.exports = mongoose.model("User", UserSchema);