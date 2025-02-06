import { Box } from '@mui/material';
import React from 'react';


const AuthLayout = ({ children }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      bgcolor: 'background.default',
      p: 3,
    }}
  >
    <Box
      sx={{
        width: '100%',
        maxWidth: 450,
        bgcolor: 'background.paper',
        borderRadius: 2,
        p: 4,
        boxShadow: 3,
      }}
    >
      {children}
    </Box>
  </Box>
);

export default AuthLayout;