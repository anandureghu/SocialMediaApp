const router = require('express').Router();
const {createPost, getPost, updatePost, deletePost, likePost} = require('../controllers/posts');


router.route("/").post(createPost);
router.route("/:id").delete(deletePost).get(getPost).patch(updatePost);
router.route("/:id/like").patch(likePost);

module.exports = router;