const getNotes = require('./notes.js')
const validator = require('validator')

const myNotes = getNotes()

console.log(myNotes)

console.log(validator.isEmail('hien.nguyen@flex.com'))