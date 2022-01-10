const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { 
	profileDetails, 
	editProfileDetails, 
	editPassword } = require('../controllers/userController');

router.get('/profile', auth.verifyToken, profileDetails);

router.patch(
	'/profile/editprofile',
	auth.verifyToken,
	editProfileDetails
);

router.put('/profile/editpassword', auth.verifyToken, editPassword);

module.exports = router;
