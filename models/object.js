'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ObjectSchema = Schema({
  prop1: String,
  prop2: String,
});

module.exports = mongoose.model('Object', ObjectSchema);
