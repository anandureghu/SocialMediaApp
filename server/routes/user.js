const router = require('express').Router();
const {updateUser, deleteUser, getUser} = require('../controllers/user');


router.route("/:username")
    .patch(updateUser)
    .delete(deleteUser)
    .get(getUser);
// router.route("/").get();


module.exports = router;