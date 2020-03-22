'use strict';

/**
 * Notes
 * @module notes
 */

 /**
  * Note - constructor function
  * @function Note
  */



function Notes(args) {
  if (args.valid()) this.execute(args.command)
    else console.error('ERROR! Invalid arguments sent to app.');
}

Notes.prototype.execute = function(command) {
  switch(command.action) {
    case 'add':
      this.add(command.payload);
      break;
    default: break;
  }
};

Notes.prototype.add = function(payload) {
  let id = Math.floor(Math.random() * 100);
  console.log('adding note');
  console.log( id + ':', payload);
};

module.exports = Notes;


