const User = require("../models/User");
const bcrypt = require('bcrypt');

const register = async (req,res) => {
    const {username, name, email, password, password2, profilePicture, coverPicture, isAdmin} = req.body;
    if(!username || !email || !password || !password2){
        return res.status(400).json({success: false, msg: "Please fill required fields"});
    }
    if(password !== password2){
        return res.status(400).json({success: false, msg: "Passwords doesn't match"});
    }

    try {   
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({
            username,
            name,
            email,
            password: hashedPassword,
            profilePicture,
            coverPicture,
            isAdmin
        });
        res.status(200).json({success: true, user});
    } catch (error) {
        return res.status(400).json({success: false, msg: "Error", error});
    }
}

const login = async (req,res) => {
    const{username, password} = req.body;

    let user;
    if(username.includes("@")){
        user = await User.findOne({email: username});
    }
    else{
        user = await User.findOne({username});
    }

    if(!user){
        return res.status(404).json({success:false, msg: "user not found"});
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if(!isValidPassword){
        return res.status(400).json({success:false, msg: "Incorrect Password"});
    }

    res.status(200).json({success: true, user});
}

module.exports = {
    register,
    login
}