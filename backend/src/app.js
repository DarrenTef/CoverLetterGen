// backend/src/app.js
const express = require('express');
const cors = require('cors');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const OpenApiValidator = require('express-openapi-validator');
const swaggerUi = require('swagger-ui-express');

// Import route handlers
const auth = require('./routes/auth');
const upload = require('./routes/upload');
const generate = require('./routes/generate');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// OpenAPI/Swagger setup
const apiSpec = path.join(__dirname, './api/openapi.yaml');
const apidoc = yaml.load(fs.readFileSync(apiSpec, 'utf8'));

app.use(
  '/v0/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(apidoc)
);

// OpenAPI validation
app.use(
  OpenApiValidator.middleware({
    apiSpec: apiSpec,
    validateRequests: true,
    validateResponses: true,
  })
);

// Routes
app.post('/v0/login', auth.login);
app.post('/v0/upload', upload.handleUpload);
app.post('/v0/generate', generate.handleGenerate);

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
    status: err.status,
  });
});

module.exports = app;