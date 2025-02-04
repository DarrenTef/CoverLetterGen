// src/pages/SignupPage.jsx
import React, { useState } from "react";
import { Box, Link, Divider, TextField, IconButton, Typography, InputAdornment } from "@mui/material";
import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff, Google, GitHub, Twitter } from "@mui/icons-material"; 

export default function SignupPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSignup = () => {
    // TODO: Implement sign-up logic
    navigate("/Login");
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
      <Box gap={1.5} display="flex" flexDirection="column" alignItems="center" sx={{ mb: 5 }}>
        <Typography variant="h5">Sign Up</Typography>
        <Typography variant="body2" color="text.secondary">
          Already have an account? 
          <Link href="/Login" variant="subtitle2" sx={{ ml: 0.5 }}>Sign in</Link>
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="flex-end" width="100%" maxWidth="400px">
        <TextField
          fullWidth
          label="Email address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          InputLabelProps={{ shrink: true }}
          sx={{ mb: 3 }}
        />

        <TextField
          fullWidth
          label="Password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ mb: 3 }}
        />

        <Button
          fullWidth
          size="large"
          color="primary"
          variant="contained"
          onClick={handleSignup}
        >
          Sign up
        </Button>
      </Box>

      <Divider sx={{ my: 3, "&::before, &::after": { borderTopStyle: "dashed" } }}>
        <Typography variant="overline" sx={{ color: "text.secondary", fontWeight: "fontWeightMedium" }}>OR</Typography>
      </Divider>

      <Box gap={1} display="flex" justifyContent="center">
        <IconButton color="inherit"><Google /></IconButton>
        <IconButton color="inherit"><GitHub /></IconButton>
        <IconButton color="inherit"><Twitter /></IconButton>
      </Box>
    </Box>
  );
}
