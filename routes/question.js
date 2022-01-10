const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
    newQuestion,
    questionDetails,
    allQuestions } = require('../controllers/questionController');

router.post('/add-new', auth.verifyToken, newQuestion);

router.get('/details/:id', questionDetails);

router.get('/all', allQuestions);


module.exports = router;
