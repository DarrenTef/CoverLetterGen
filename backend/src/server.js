import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import auth from './routes/auth.js';  // Use relative path with .js
import cors from 'cors';

const app = express();

app.use(cors());

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Register authentication routes
app.use('/auth', auth);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
