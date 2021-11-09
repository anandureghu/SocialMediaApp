const router = require('express').Router();
const {createPost, getPost, updatePost, deletePost} = require('../controllers/posts');


router.route("/").post(createPost);
router.route("/:id").delete(deletePost).get(getPost).patch(updatePost);

module.exports = router;