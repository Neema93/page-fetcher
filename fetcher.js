//add net
const net = require('net');
//save command line argument
let arg = process.argv.slice(2);
// get buffer and fs file
const Buffer = require ('buffer');
const fs = require('fs')
//get http address in arg[0]
const data = new Uint8Array(arg[0]);
// write file message
 fs.writeFile(arg[1], data, (err) => {
  if (err) throw err;
  console.log('Downloaded and saved 3261 bytes to',arg[1]);
});
