import React, { useEffect } from 'react';

import { Formik, Field } from 'formik';

import { connect } from 'react-redux';

import * as Yup from 'yup';
import { FormWrapper, StyledForm } from '../../../hoc/layout/elements';

import Input from '../../../components/UI/Forms/Input/Input';
import Button from '../../../components/UI/Forms/Button/Button';
import Heading from '../../../components/UI/Forms/Heading/Heading';
import Message from '../../../components/UI/Forms/Message/Message';

import * as actions from '../../../store/actions';

import styled from 'styled-components';

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
		.required('The Password field is required!  ')
		.min(8, 'The password is to short'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], `Password doesn't match`)
		.required('You need to confirm your password')
})

const MessageWrapper = styled.div`
	position: absolute;
	bottom: 0;
`;

const SignUp = ({ signUp, loading, error, cleanUp }) => {
	useEffect(() => {
		return () => {
			cleanUp()
		};
	}, [cleanUp]);
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
			onSubmit={async (values, { setSubmitting }) => {
				await signUp(values);
				setSubmitting(false);
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

						<Button disabled={!isValid || isSubmitting} loading={loading ? "Signing up..." : null} type="submit">Submit</Button>
						<MessageWrapper>
							<Message error show={error}>
								{error}
							</Message>
						</MessageWrapper>
					</StyledForm>
				</FormWrapper>
			)}
		</Formik>
	);
}

const mapStateToProps = ({ auth }) => ({
	loading: auth.loading,
	error: auth.error
})

const mapDispatchToProps = {
	signUp: actions.signUp,
	cleanUp: actions.clean,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);