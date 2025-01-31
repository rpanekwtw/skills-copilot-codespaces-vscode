// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

// Middleware
app.use(bodyParser.json());

// Data
const comments = [
  { id: 1, content: 'Hello World' },
  { id: 2, content: 'Hi there' },
    { id: 3, content: 'Good day' }
  ];