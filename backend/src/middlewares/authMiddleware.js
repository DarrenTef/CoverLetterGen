// authMiddleware.js
// Checks for user authentication if needed
// Check before accessing certain routes

import supabase from '../services/supabaseClient.js';  // Add .js extension

async function checkAuth(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1]; // Get the token from the Authorization header

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    // Verify the JWT token using Supabase's API
    const { user, error } = await supabase.auth.api.getUser(token);

    if (error) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }

    req.user = user;  // Attach the authenticated user to the request object
    next();  // Move to the next middleware or route handler
  } catch (err) {
    return res.status(500).json({ message: 'Error verifying token', error: err.message });
  }
}

export default checkAuth;
