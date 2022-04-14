const router = require("express").Router();
// import all user routes
const {
  getAllUser,
  getUserById,
  createUser,
  deleteUser,
} = require("../../controllers/user-controllers");

// /api/users
router.route("/").get(getAllUser).post(createUser);

// /api/users/:id
router.route("/:id").get(getUserById).delete(deleteUser);

module.exports = router;
