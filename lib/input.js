'use strict';

/**
 * Input
 * @module input
 */

/**
 * Input - constructor function
 * @function Input
 */





const minimist = require('minimist');

function Input(args) {
  let formatted = minimist(args);
  this.command = {};
  let objectKeyArray = Object.keys(formatted);
  for (let i = 0; i < objectKeyArray.length; i++) {
    let key = objectKeyArray[i];
    let val = formatted[key];

    switch (key) {
      case 'a':
      case 'add':
            this.command = { action: 'add', payload: val};
            return;
          default:
            break;
    }
  }
}


Input.prototype.valid = function() {
  if (!this.command) return false;
  if (!this.command.action) return false;

  switch (this.command.action) {
    case 'add':
      return typeof this.command.payload === 'string';
    default: 
      break;
  }
};

module.exports = Input;



