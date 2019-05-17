import React from 'react';

import { Formik, Field } from 'formik';

import * as Yup from 'yup';
import { FormWrapper, StyledForm } from '../../../hoc/layout/elements';

import Input from '../../../components/UI/Forms/Input/Input';
import Button from '../../../components/UI/Forms/Button/Button';
import Heading from '../../../components/UI/Forms/Heading/Heading';

const SignUpSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(3, 'Too short.')
		.max(25, 'Too long.')
		.required('Your first name is required!  '),
	lastName: Yup.string()
		.min(3, 'Too short.')
		.max(25, 'Too long.')
		.required('Your last name is required!'),
	email: Yup.string()
		.email('Invalid email!')
		.required('The Email field is required!'),
	password: Yup.string()
		.required('The Password field is required!  '),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], `Password doesn't match`)
		.required('You need to confirm your password')
})

const SignUp = (props) => {
	return (
		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				confirmPassword: ''
			}}
			validationSchema={SignUpSchema}
			onSubmit={(values, { setSubmitting }) => {
				console.info('[Login.js] values ======>', values);
			}}
		>
			{({ isSubmitting, isValid }) => (
				<FormWrapper>
					<Heading size="h1" color="white">Sing up for account</Heading>
					<Heading size="h4" bold={true} color="white">Fill in your details to register your new account</Heading>
					<StyledForm>
						<Field
							type="string"
							name="firstName"
							placeholder="Your first name..."
							component={Input}
						/>

						<Field
							type="string"
							name="lastName"
							placeholder="Your last name..."
							component={Input}
						/>

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

						<Field
							type="password"
							name="confirmPassword"
							placeholder="Re-Type your password..."
							component={Input}
						/>

						<Button disabled={!isValid} type="submit">Submit</Button>
					</StyledForm>
				</FormWrapper>
			)}
		</Formik>
	);
}

export default SignUp;