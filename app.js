const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const http = require('http');


const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) => res.status(200).send({
message: 'Welcome to the beginning of nothingness.',
})); 
const port = parseInt(process.env.PORT, 10) || 8001;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;
