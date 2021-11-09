const router = require('express').Router();
const {updateUser, deleteUser} = require('../controllers/user');

router.route("/:username").patch(updateUser).delete(deleteUser);
// router.route("/").get();


module.exports = router;