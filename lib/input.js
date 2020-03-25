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
// This job is to say I have this information and what do we do with it
class Input {

  constructor(args) {
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
        case 'l':
        case 'list':
            this.command = {
              action: 'list',
              payload: val};
              return;
        case 'd':
        case 'delete':
            this.command = {
              action: 'list',
              payload: _id};
              return;
        case 'u':
        case 'update':
            this.command = {
              action: 'update',
              payload: val};
              return;
        default:
              break;
      }
    }
  }  
  valid(){
    if (!this.command) return false;
  if (!this.command.action) return false;
    switch (this.command.action) {
      case 'add':
        return typeof this.command.payload === 'string';
      default: 
        break;
    }
  }

}




module.exports = Input;



