import React from 'react';

import { Formik, Field } from 'formik';

import * as Yup from 'yup';
import { FormWrapper, StyledForm } from '../../../hoc/layout/elements';

import Input from '../../../components/UI/Forms/Input/Input';
import Button from '../../../components/UI/Forms/Button/Button';
import Heading from '../../../components/UI/Forms/Heading/Heading';

const LoginSchema = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email!')
		.required('The Email field is required!'),
	password: Yup.string()
		.required('The Password field is required!  ')
})

const Login = (props) => {
	return (
		<Formik
			initialValues={{
				email: '',
				password: ''
			}}
			validationSchema={LoginSchema}
			onSubmit={(values, { setSubmitting }) => {
				console.info('[Login.js] values ======>', values);
			}}
		>
			{({ isSubmitting, isValid }) => (
				<FormWrapper>
					<Heading size="h1" color="white">Login into your account</Heading>
					<Heading size="h4" bold={true} color="white">Fill in your details to login into your account</Heading>
					<StyledForm>
						<Field
							type="email"
							name="email"
							placeholder="Your email..."
							component={Input}
						/>

						<Field
							type="password"
							name="password"
							placeholder="Your password..."
							component={Input}
						/>

						<Button disabled={!isValid} type="submit">Submit</Button>
					</StyledForm>
				</FormWrapper>
			)}
		</Formik>
	);
}

export default Login;