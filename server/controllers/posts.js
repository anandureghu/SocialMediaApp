const Post = require('../models/Post');
const User = require('../models/User');


const createPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json({success: true, post});
    } catch (error) {
        res.status(500).json({success: false, msg: "Internal server error", error});
    }
}

const getPost = async (req, res) => {
    try {
        const post = await Post.findOne({_id: req.params.id});
        if(!post){
            return res.status(400).json({success: false, msg: `No post with id: ${req.params.id}`})
        }
        res.status(200).json({success: true, post});
    } catch (error) {
        res.status(500).json({success: false, msg: "Internal server error", error});
    }
}

const updatePost = async (req, res) => {
    try {
        const post = await Post.findOne({_id: req.params.id});
        if(!post){
            return res.status(400).json({success: false, msg: `No posts exists with id: ${req.params.id}`});
        }
        if(post.username === req.body.username || req.body.isAdmin){
            const updatedPost = await Post.findOneAndUpdate({_id: req.params.id, username: req.body.username}, req.body, {new:true});
            res.status(200).json({success: true, post: updatedPost});
        }else{
            return res.status(401).json({success: false, msg: `Unauthorized`});
        }

    } catch (error) {
        res.status(500).json({success: false, msg: "Internal server error", error});
    }
}

const deletePost = async (req, res) => {
    try {
        const post = await Post.findOne({_id: req.params.id});
        if(!post){
            return res.status(400).json({success: false, msg: `No posts exists with id: ${req.params.id}`});
        }
        if(post.username === req.body.username || req.body.isAdmin){
            await Post.findOneAndRemove({_id: req.params.id});
        }else{
            return res.status(401).json({success: false, msg: `Unauthorized`});
        }
        res.status(200).json({success: true, msg: "Post deleted successfully"});
    } catch (error) {
        res.status(500).json({success: false, msg: "Internal server error", error});
    }
}

// Like or dislike post

const likePost = async (req, res) => {
    try {
        const post = await Post.findOne({_id: req.params.id});
        if(!post){
            return res.status(400).json({success: false, msg: `No post with id: ${req.params.id}`});
        }
        if(post.likes.includes(req.body.username)){
            await post.updateOne({$pull: {likes: req.body.username}});
            return res.status(200).json({success: true, msg: "Post Disliked Succeesfully"});
        }else{
            await post.updateOne({$push: {likes: req.body.username}});
            return res.status(200).json({success: true, msg: "Post Liked Successfully"})
        }
    } catch (error) {
        res.status(500).json({success: false, msg: "Internal server error", error});
    }
}

const getTimelinePosts = async (req, res) => {
    try {
        if(!req.body.username){
            return res.status(400).json({success: false, msg: "No user logged in"});
        }
        const user = await User.findOne({username: req.body.username});
        const userPosts = await Post.find({username: user.username});
        const friendPosts = await Promise.all(
            user.following.map(friendUsername => {
                return Post.find({username: friendUsername})
            })
        );
        const posts = await userPosts.concat(...friendPosts);
        res.status(200).json({success: true, nbHits: posts.length, posts});
    } catch (error) {
        res.status(500).json({success: false, msg: "Internal server error", error});
    }
}

const getAllPosts = async (req, res) => {
    try {
        if(!req.params.username){
            return res.status(400).json({success: false, msg: "No user logged in"});
        }
        
        const posts = await Post.find({username: req.params.username});
        
        res.status(200).json({success: true, nbHits: posts.length, posts});
    } catch (error) {
        res.status(500).json({success: false, msg: "Internal server error", error});
    }
} 

module.exports = {
    createPost,
    updatePost,
    getPost,
    deletePost,
    likePost,
    getTimelinePosts,
    getAllPosts
}