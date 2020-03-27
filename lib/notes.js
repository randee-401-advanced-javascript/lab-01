'use strict';

let mongoose = require('mongoose');
let NotesModel = require('../models/notes-schema.js');

/**
 * Notes
 * @module notes
 */

 /**
  * Note - constructor function
  * @function Note
  */




class Notes {
  constructor(command){
    if (command && command.action) this.execute(command);    else console.error('ERROR! Invalid arguments sent to app. Please work harder to not be an invalid.', e);
  }

  execute(command){
    switch(command.action) {
      case 'add':
        if (!command.payload) {
          console.error('Missing payload. Do something about this, would you?', e);
          return;
        }
        this.create(command.payload, command.category);
        break;
      case 'list':
        this.read(command.payload);
        break;
      case 'delete':
        if(!command.payload){
          console.error('Missing payload. Do something about this, would you?', e);
          return;
        }
        this.delete(command.payload);
        break;
      default: break;
    }
  }
  
  async create(noteText, category) {
    try{
      let newNote = new NotesModel ({
        note: noteText,
        category: category ? category : '',
      })
      await newNote.save();
    } catch (e) {
      console.error(e, 'Could not add a note. You should do something about this.', e);
    }
    mongoose.disconnect();
  }

  async read(category) {
    let allNotes = []; 
    try {
      allNotes = await NotesModel.find();
    } catch (e) {
      console.error('Could not find notes to read. Look harder', e);
    } 
    if(category){
      allNotes = allNotes.filter(note => {
        return note.category.includes(category);
      }) 
    }
    allNotes.forEach(note => {
      console.log(note.note, note._id);
    })
    mongoose.disconnect();
  }

  async delete(noteId) {
    try {
      await NotesModel.deleteOne({ _id : noteId })
    } catch (e) {
      console.error('Could not find note to delete. Look harder.', e)
    } 
    mongoose.disconnect();
  }
}



module.exports = Notes;


