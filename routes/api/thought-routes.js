const router = require('express').Router();
// import all Thoughts routes
const {
  getAllThoughts,
  getOneThoughts,
  addThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughts-controllers');

// /api/thoughts/userId
router.route('/:userId').post(addThought);
//  /api/thoughts
router.route('/').get(getAllThoughts)
//  /api/thoughts/thoughtId
router.route('/:thoughtId').get(getOneThoughts)
// /api/thoughts/userId/thoughtId
router
  .route('/:userId/:thoughtId')
  .put(addReaction)
  .delete(removeThought);

// /api/thoughts/userId/thoughtId/reactionId
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;