import express from 'express';
import bodyParser from 'body-parser';
import auth from './routes/auth.js'; // Add .js extension
import cors from 'cors';

const app = express();

app.use(cors());

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Register authentication routes
app.use('/auth', auth);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
