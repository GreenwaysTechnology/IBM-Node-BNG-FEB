const os = require('os');
const {message} = require('./greeter')

console.log(os.cpus());
console.log(os.arch())