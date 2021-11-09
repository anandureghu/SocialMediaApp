const router = require('express').Router();
const {createPost, getPost, updatePost, deletePost, likePost, getTimelinePosts, getAllPosts} = require('../controllers/posts');


router.route("/").post(createPost);
router.route("/:id").delete(deletePost).get(getPost).patch(updatePost);
router.route("/:id/like").patch(likePost);
router.route("/timeline/all").get(getTimelinePosts);
router.route("/:username/all").get(getAllPosts);

module.exports = router;