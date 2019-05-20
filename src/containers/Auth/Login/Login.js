import React, { useEffect } from 'react';

import { Formik, Field } from 'formik';

import * as Yup from 'yup';
import { FormWrapper, StyledForm } from '../../../hoc/layout/elements';

import Input from '../../../components/UI/Forms/Input/Input';
import Button from '../../../components/UI/Forms/Button/Button';
import Heading from '../../../components/UI/Forms/Heading/Heading';
import Message from '../../../components/UI/Forms/Message/Message';

import { connect } from 'react-redux';

import styled from 'styled-components';

import * as actions from '../../../store/actions';

const MessageWrapper = styled.div`
	position: absolute;
	bottom: 0;
`;

const LoginSchema = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email!')
		.required('The Email field is required!'),
	password: Yup.string()
		.required('The Password field is required!  ')
})

const Login = ({ logIn, loading, error, cleanUp }) => {
	useEffect(() => {
		return () => {
			cleanUp()
		};
	}, [cleanUp]);
	
	return (
		<Formik
			initialValues={{
				email: '',
				password: ''
			}}
			validationSchema={LoginSchema}
			onSubmit={async (values, { setSubmitting }) => {
				await logIn(values);
				setSubmitting(false);
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

						<Button disabled={!isValid || isSubmitting} loading={loading ? "Signing in..." : null} type="submit">Submit</Button>

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
	logIn: actions.logIn,
	cleanUp: actions.clean,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);