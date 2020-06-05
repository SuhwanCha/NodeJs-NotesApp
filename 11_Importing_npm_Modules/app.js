// const add = require('./utils.js');

// const sum = add(4, -2)

// console.log(sum)

// https://www.npmjs.com/

// npm -v for checking version of npm
// initialize npm: `npm init`

const validator = require('validator')
const notes = require('./notes.js')

console.log(notes())


console.log(validator.isEmail('foo@example.com'))
console.log(validator.isURL('https://mead.io'))