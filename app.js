'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');

const app = express();
const BASE_URL = '/api/v1';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(BASE_URL, router);

module.exports = app;
