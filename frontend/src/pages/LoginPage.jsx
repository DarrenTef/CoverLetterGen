import AuthLayout from '../components/AuthLayout';
import AuthForm from '../sections/auth/AuthForm';
import React from 'react';

const LoginPage = () => (
  <AuthLayout>
    <AuthForm mode="login" />
  </AuthLayout>
);

export default LoginPage;