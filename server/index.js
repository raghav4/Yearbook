const express = require('express');
const app = express();
const winston = require('winston');

require('./startup/db')();

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  winston.info(`Listening on PORT ${PORT}...`)
);

module.exports = server;
