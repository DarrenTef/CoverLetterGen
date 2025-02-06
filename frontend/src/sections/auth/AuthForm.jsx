import React, { useState } from 'react';
import { TextField, Box, Link, Divider, Typography, IconButton, Button, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Iconify from '../../components/Iconify';
import { login, signUp } from '../../services/auth';


const AuthForm = ({ mode }) => {
  const isLogin = mode === 'login';
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      if (isLogin) {
        await login(formData.email, formData.password);
      } else {
        await signUp(formData.email, formData.password);
      }
      navigate('/home');
    } catch (err) {
      setError(err.message || 'Authentication failed. Please try again.');
    }
  };

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      <Typography variant="h4" gutterBottom>
        {isLogin ? 'Welcome Back' : 'Create Account'}
      </Typography>

      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <Link href={isLogin ? "/signup" : "/login"} sx={{ ml: 1 }}>
          {isLogin ? "Sign up" : "Sign in"}
        </Link>
      </Typography>

      <TextField
        fullWidth
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange('email')}
        sx={{ mb: 2 }}
        required
      />

      <TextField
        fullWidth
        label="Password"
        type={showPassword ? 'text' : 'password'}
        value={formData.password}
        onChange={handleChange('password')}
        sx={{ mb: 2 }}
        required
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                <Iconify icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {!isLogin && (
        <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange('confirmPassword')}
          sx={{ mb: 2 }}
          required
        />
      )}

      {isLogin && (
        <Box sx={{ textAlign: 'right', mb: 2 }}>
          <Link href="/forgot-password" variant="body2">
            Forgot password?
          </Link>
        </Box>
      )}

      <Button
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        sx={{ mb: 3 }}
      >
        {isLogin ? 'Sign In' : 'Sign Up'}
      </Button>

      <Divider sx={{ my: 3 }}>
        <Typography variant="overline" sx={{ color: 'text.secondary' }}>
          OR CONTINUE WITH
        </Typography>
      </Divider>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        {['google', 'github', 'twitter'].map((provider) => (
          <IconButton key={provider} color="inherit">
            <Iconify icon={`logos:${provider}-icon`} />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default AuthForm;