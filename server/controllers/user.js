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

// Follow user
const followUser = async (req, res) => {
    if(req.body.username !== req.params.username){
        const user = await User.findOne({username: req.body.username});
        const followingUser = await User.findOne({username: req.params.username});

        if(!user || !followingUser){
            return res.status(400).json({success:false, msg: "Invalid credentials"});
        }

        if(!user.following.includes(req.params.username)){
            await user.updateOne({$push: {following: req.params.username}});
            await followingUser.updateOne({$push: {followers: req.body.username}});
            res.status(200).json({success:true, msg: "User has been followed"});
        }else{
            res.status(400).json({success:flase, msg: "You are already following this user"});
        }

    }else{
        return res.status(403).json({success:false, msg: "You can't follow yourself"});
    }

}

// Unfollow user
const unfollowUser = async (req, res) => {
    if(req.body.username !== req.params.username){
        const user = await User.findOne({username: req.body.username});
        const unfollowingUser = await User.findOne({username: req.params.username});

        if(!user || !unfollowingUser){
            return res.status(400).json({success:false, msg: "Invalid credentials"});
        }

        if(user.following.includes(req.params.username)){
            await user.updateOne({$pull: {following: req.params.username}});
            await unfollowingUser.updateOne({$pull: {followers: req.body.username}});
            res.status(200).json({success:true, msg: "User has been unfollowed"});
        }else{
            res.status(400).json({success:false, msg: "You cant unfollow a user that you dont follow"});
        }
        
    }else{
        return res.status(403).json({success:false, msg: "You can't unfollow yourself"});
    }
}

module.exports = {updateUser, deleteUser, getUser, followUser, unfollowUser};