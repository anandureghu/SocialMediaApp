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
    },
    description: {
        type: String,
        maxlength: 150
    },
    city: {
        type: String,
        maxlength: 50
    },
    from: {
        type: String,
        maxlength: 50
    },
    relationship: {
        type: String,
        enum: ["single", "married", "divorced"],
    },

}, {timestamps: true});

module.exports = mongoose.model("User", UserSchema);