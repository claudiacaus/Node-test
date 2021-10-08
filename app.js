const express = require('express');
const routes = require('./routes/routes');

const app = express();

app.use(express.json());

// parse form data

app.use(routes);

app.use('/:id', routes);

module.exports = app;
