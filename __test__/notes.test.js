'use strict';

//worked with Dan and Clayton on this

const Input = require('../lib/input.js');
const Notes = require('../lib/notes');
const minimist = require('minimist');

const goodInput = ['-a', 'text'];

describe('add() outputs console log', () => {
  it('handles good input for console log', () => {
    let result = new Input(goodInput);
    let newNotes = new Notes(result);
    let creeper = jest.spyOn(global.console, 'log');
    let add = jest.fn(new Notes.add());
    add();
    expect(creeper).toHaveBeenCalled();
  })
})


