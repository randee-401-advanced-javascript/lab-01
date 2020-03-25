'use strict';

const mongoose = require('mongoose');

const catagoriesSchema = mongoose.Schema({
  name: { type: String, required: true },
});

const catagoriesModel = mongoose.model('catagories', catagoriesSchema);

module.exports = catagoriesModel;

