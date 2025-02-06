import AuthLayout from '../components/AuthLayout';
import AuthForm from '../sections/auth/AuthForm';
import React from 'react';

const SignupPage = () => (
  <AuthLayout>
    <AuthForm mode="signup" />
  </AuthLayout>
);

export default SignupPage;