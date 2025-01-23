require('dotenv').config();
const app = require('./app.js');

const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API Docs: http://localhost:${PORT}/v0/api-docs`);
});