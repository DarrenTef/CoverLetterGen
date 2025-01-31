// authController.js
// Contains the logic for signing up and logging in users

import supabase from '../services/supabaseClient.js'; // Add .js extension

// Signup a new user
export async function signUp(req, res) {
  const { email, password } = req.body;
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return res.status(400).json({ message: error.message });
  }
  res.status(200).json({ message: 'User signed up' });
}

// Login an existing user
export async function login(req, res) {
  const { email, password } = req.body;
  const { user, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return res.status(400).json({ message: error.message });
  }
  res.status(200).json({ message: 'User logged in', user });
}
