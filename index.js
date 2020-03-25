#!/usr/bin/env node
'use strict';

/**
 * / Request Handler (All Routes)
 * @param req
 * @param res
 */


const mongoose = require('mongoose');
const dbURL = 'mongodb://localhost:27017:notesApp';
const Notes = require('./models/notes-schema.js');
const Input = require('./lib/input')
const Catagories = require('./models/catagories-schema.js');


 mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true});

let args = process.argv.slice(2);

const dbOperations = async () => {
//give me the command arguments,
//send to input with let blah = new Input
//input sends back to index
//index sends those things to notes
//we cand send these to the db here
//notes sends back to index
  if (args.length > 0) {
    let newInput = Input({
      note: args[0],
    });
    try {
      await newInput.save();
    } catch (e) {
      console.error(e);
    }
  }

  let importCatagory = await Catagories.findOne({ name: 'important' });
  let importCatagoryId;
  if(importCatagory) importCatagoryId = importCatagory._id;

  let allNotes = await Notes.find();

  allNotes.forEach(val => {
    console.log(val.note);
  });

  mongoose.disconnect();
}

dbOperations();


