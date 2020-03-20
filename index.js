#!/usr/bin/env node
'use strict';


/**
 * / Request Handler (All Routes)
 * @param req
 * @param res
 */



const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js')

let parsedInput = new Input(process.argv.slice(2));
let notes = new Notes(parsedInput);

console.log('up and running');
