const path = require('path');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//All routes
const auth = require('./routes/auth');
app.use('/api/auth', auth);

const user = require('./routes/user');
app.use('/api/user', user);

const question = require('./routes/question');
app.use('/api/question',question);

const answer = require('./routes/answer');
app.use('/api/answer', answer);

const rating = require('./routes/rating');
app.use('/api/rating', rating);




if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/client/build')));

	app.get('/*', (req, res) => {
		res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
	});
} else {
	app.use(express.static(path.join(__dirname, '/client/public')));
	
	app.get('/*', (req, res) => {
		res.sendFile(path.join(__dirname, 'client', 'public', 'index.html'));
	});
}

//Database
connectDB();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
