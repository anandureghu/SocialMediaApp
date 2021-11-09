const router = require('express').Router();
const {updateUser, deleteUser, getUser, followUser, unfollowUser} = require('../controllers/user');


router.route("/:username")
    .patch(updateUser)
    .delete(deleteUser)
    .get(getUser);

router.route("/follow/:username").patch(followUser);
router.route("/unfollow/:username").patch(unfollowUser);



module.exports = router;