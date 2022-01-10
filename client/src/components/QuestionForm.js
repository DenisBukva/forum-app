import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const useStyles = makeStyles({
	button: { margin: '8px 0 !important' },
	
});

const validationSchema = Yup.object().shape({
	title: Yup.string().required('Title is required!'),
	text: Yup.string().required('Details are required!')
});

const QuestionForm = ({ onSubmit }) => {
	const classes = useStyles();

	const formik = useFormik({
		initialValues: {
			title: '',
			text: ''
		},
		validationSchema: validationSchema,
		onSubmit: onSubmit
	});

	return (
		<form onSubmit={formik.handleSubmit} noValidate>
			<TextField
				fullWidth
				id='title'
				name='title'
				type='text'
				value={formik.values.title}
				onChange={formik.handleChange}
				style={{border: '1px solid blue', borderRadius:'10px'}}
				label='Title'
				variant='outlined'
				margin='dense'
				required
				error={formik.touched.title && Boolean(formik.errors.title)}
				helperText={formik.touched.title && formik.errors.title}
			/>
			<TextField
				fullWidth
				multiline
				rows={4}
				id='text'
				name='text'
				style={{border: '1px solid blue', borderRadius:'10px'}}
				type='text'
				value={formik.values.text}
				onChange={formik.handleChange}
				label='Details'
				variant='outlined'
				margin='dense'
				required
				error={formik.touched.text && Boolean(formik.errors.text)}
				helperText={formik.touched.text && formik.errors.text}
			/>
			<Button
				fullWidth
				type='submit'
				variant='contained'
				color='primary'
				className={classes.button}
				style={{ marginTop: '10px',background:'#A7BC5B', borderRadius:'10px' }}
				disabled={formik.isSubmitting}>
				{formik.isSubmitting ? 'Please wait' : 'Submit Question'}
			</Button>
		</form>
	);
};

export default QuestionForm;
