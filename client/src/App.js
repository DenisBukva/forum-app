import React, {  useEffect } from 'react';
import './index.css';
import Navbar from './components/Header';
import MainRouter from './MainRouter';
import Footer from './components/Footer';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearMessage } from './actions/messageActions';

const App = () => {
	let history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		history.listen((location) => {
			dispatch(clearMessage());
		});
	}, [dispatch, history]);

	return (
		<>
			<Navbar />
			<div className='root'>
				<MainRouter />
			</div>
			<Footer />
		</>
	);
};

export default App;
