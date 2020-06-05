const fs = require('fs')
// https://nodejs.org/dist/latest-v14.x/docs/api/fs.html

fs.writeFileSync('notes.txt', 'My name is Suhwan') // write file
fs.appendFileSync('notes.txt', 'My name is Suhwan') // append file

