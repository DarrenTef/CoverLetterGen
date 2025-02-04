import { useState, useCallback } from 'react';
import React from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from '../../routes/hooks/useRouter';

import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

export default function SignInView() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = useCallback(() => {
    router.push('/');
  }, [router]);

  const renderForm = (
    <Box display="flex" flexDirection="column" alignItems="flex-end" sx={{ width: '100%', maxWidth: 400, mx: 'auto' }}>
      <TextField
        fullWidth
        name="email"
        label="Email address"
        defaultValue="hello@gmail.com"
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 2 }}
      />

      <Link variant="body2" color="primary" sx={{ alignSelf: 'flex-start', mb: 2 }}>
        Forgot password?
      </Link>

      <TextField
        fullWidth
        name="password"
        label="Password"
        defaultValue="@demo1234"
        InputLabelProps={{ shrink: true }}
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                <Iconify icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />

      <Button
        fullWidth
        size="large"
        type="submit"
        color="primary"
        variant="contained"
        onClick={handleSignIn}
        sx={{ py: 1.5 }}
      >
        Sign in
      </Button>
    </Box>
  );

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh', px: 3 }}>
      <Box textAlign="center" sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold">Sign in</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Don’t have an account?
          <Link variant="subtitle2" sx={{ ml: 0.5, cursor: 'pointer' }}>
            Get started
          </Link>
        </Typography>
      </Box>

      {renderForm}

      <Divider sx={{ my: 4, width: '100%', maxWidth: 400, mx: 'auto', '&::before, &::after': { borderTopStyle: 'dashed' } }}>
        <Typography variant="overline" color="text.secondary" fontWeight="medium">
          OR
        </Typography>
      </Divider>

      <Box display="flex" justifyContent="center" gap={2}>
        <IconButton color="primary">
          <Iconify icon="logos:google-icon" />
        </IconButton>
        <IconButton color="primary">
          <Iconify icon="eva:github-fill" />
        </IconButton>
        <IconButton color="primary">
          <Iconify icon="ri:twitter-x-fill" />
        </IconButton>
      </Box>
    </Box>
  );
}
