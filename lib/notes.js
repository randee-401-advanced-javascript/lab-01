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
    if (command && command.action) this.execute(command);    else console.error('ERROR! Invalid arguments sent to app.');
  }

  execute(command){
    switch(command.action) {
      case 'add':
        if (!command.payload) {
          console.error('Missing payload. Do something about this, would you?');
          return;
        }
        this.add(command.payload, command.category);
        break;
      case 'list':
        this.list(command.payload);
        break;
      case 'delete':
        if(!command.payload){
          console.error('Missing payload. Do something about this, would you?');
          return;
        }
        this.delete(command.payload);
        break;
      default: break;
    }
  }
  
  async add(noteText, category) {
    console.log('note text', noteText);
    // console.log(noteText, category);
    try{
      // console.log('inside try');
      let newNote = new NotesModel ({
        note: noteText,
        category: category ? category : '',
      })
      await newNote.save();
      console.log('note saved!');
    } catch (e) {
      console.error(e, 'Could not add a note. You should do something about this.');
    }
    mongoose.disconnect();
  }

  async list(category) {
    let allNotes = []; 
    try {
      allNotes = await NotesModel.find();
    } catch (e) {
      console.error('Could not find notes. Look harder');
    } 
    if(category){
      console.log('inside cat if statement');
      allNotes = allNotes.filter(note => {
        // console.log('cat', category);
        // console.log('note.cat', note.category);
        return note.category.includes(category);
      }) 
    }
    allNotes.forEach(note => {
      console.log(note.note);
    })
    mongoose.disconnect();
  }

  async delete(noteId) {
    let allNotes = [];
    try {
      allNotes = await NotesModel.find();
    } catch (e) {
      console.error('Could not find notes. Look harder')
    } 

    allNotes.filter(id => {
      const deleteThis = _id.id === id;
      deleteThis.delete();
    })
    mongoose.disconnect();
  }
}



module.exports = Notes;


