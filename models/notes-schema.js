'use strict';

const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId , required: true},
  note: { type: String, require: true },
  category: { type: Array },
});

const notesModel = mongoose.model('notes', notesSchema);


module.export = notesModel;
