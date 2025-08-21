const fs = require('fs');

console.log('Hello, World!');
console.log('This is my first Node.js application.');
console.log("Let's build something amazing with Node.js!");

fs.writeFile('output.txt', 'Hello, World!\nThis is my first Node.js application.\nLet\'s build something amazing with Node.js!', (err) => {
  if (err) {
    console.error('Error writing to file', err);
  } else {
    console.log('File written successfully!');
  }
});