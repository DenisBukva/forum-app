const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { 
	addRating, 
	deleteQuestionRating, 
	getQuestionRatings, 
	deleteAnswerRating, 
	getAnswerRatings } = require('../controllers/ratingController');

router.post('/add', auth.verifyToken, addRating);

router.delete(
	'/question/:questionId',
	auth.verifyToken,
	deleteQuestionRating
);

router.get('/question/:questionId', getQuestionRatings);

router.delete(
	'/answer/:answerId',
	auth.verifyToken,
	deleteAnswerRating
);

router.get('/answer/:answerId/:questionId', getAnswerRatings);

module.exports = router;
