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

module.exports = {
    register,
}