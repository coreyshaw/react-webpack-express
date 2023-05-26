const express = require('express');
const xss = require('xss-clean');
const compression = require('compression');
const cors = require('cors');
const morgan = require('./config/morgan');
const routes = require('./routes');
const { paths } = require('../utils');

const app = express();

app.use(morgan.successHandler);
app.use(morgan.errorHandler);

// enable cors
app.use(cors({
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(xss());
app.use(compression());

app.get('/health', (req, res) => {
  res.json('Up');
});

app.use('/api', routes);

// app.use('/build', express.static(`${paths.build}`));
app.use(express.static(`${paths.build}`));
app.get('/*', (req, res) => {
  res.sendFile(`${paths.build}/index.html`);
});

module.exports = app;
