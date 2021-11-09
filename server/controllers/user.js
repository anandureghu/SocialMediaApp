const User = require("../models/User");
const bcrypt = require('bcrypt');

// Update user
const updateUser = async (req, res) => {
    try {
        
        if(req.body.username === req.params.username || req.body.isAdmin){
            if(req.body.password){
                const salt = bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }
        }else{
            return res.status(401).json({success:false, msg: "Unauthorized"});
        }
        
        const user = await User.findOneAndUpdate({username: req.body.username}, req.body, {new:true});
        if(!user){
            return res.status(401).json({success:false, msg: `User not exist with username: ${req.bosy.username}`});
        }
        res.status(201).json({success:true, user});

    } 
    
    catch (error) {
        res.status(401).json({success:false, msg: "Unauthorized"});
    }
}

// Delete user
const deleteUser = async (req, res) => {
    try {
        if(req.body.username === req.params.username || req.body.isAdmin){
            const user = await User.findOneAndRemove({username: req.body.username});
            if(!user){
                return res.status(401).json({success:false, msg: `User not exist with username: ${req.bosy.username}`});
            }

            res.status(200).json({success: true, user});
        }else{
            return res.status(401).json({success:false, msg: "Unauthorized"});
        }

    } catch (error) {
        res.status(401).json({success:false, msg: "Unauthorized", error});
    }
}

// Get user
const getUser = async (req, res) => {
    try {
        const result = await User.findOne({username: req.params.username}).select("-password -createdAt");

        res.status(200).json({success: true, result});
    } catch (error) {
        res.status(500).json({success:false, error});

    }
}

module.exports = {updateUser, deleteUser, getUser}