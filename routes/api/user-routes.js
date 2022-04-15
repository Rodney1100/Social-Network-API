const router = require("express").Router();
// import all user routes
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  addFriend,
  deleteFriend,
  deleteUser,
} = require("../../controllers/user-controllers");

// /api/users
router.route("/").get(getAllUser).post(createUser);

// /api/users/:id
router.route("/:id").get(getUserById).put(updateUser)
  .delete(deleteUser);

// Add and Delete a friend
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend)

module.exports = router;
