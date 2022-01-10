const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { 
    newAnswer, 
    editAnswer, 
    deleteAnswer, 
    mostAnswersList } = require('../controllers/answerController');

router.post('/add-new/:id', auth.verifyToken, newAnswer);

router.put('/:id', auth.verifyToken, editAnswer);

router.delete('/:id', auth.verifyToken, deleteAnswer);

router.get('/most-active-users', mostAnswersList);

module.exports = router;
