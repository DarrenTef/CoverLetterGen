import React, { useState } from 'react';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const apiUrl = 'http://localhost:3000/auth';  // Your backend URL for auth routes
  console.log('Frontend is running...');
  // Handle signup
  const signup = async () => {
    console.log('Checks signup');
    const response = await fetch(`${apiUrl}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.success) {
      setMessage('Yay! You signed up successfully!');
    } else {
      setMessage('Signup failed: ' + data.message);  // Show the error message if signup fails
    }
  };

  return (
    <div>
      <h1>Signup Form</h1>

      {/* Signup Section */}
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signup}>Sign Up</button>
      </div>

      {/* Display the message after signup */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default App;
