const fs = require('fs');


const fileName = './src/info.txt';
const options = {
    encoding: 'utf-8'
}
console.log('start')
fs.readFile(fileName, options, function (err, data) {
    if (err) throw err;
    console.log(data);
});
console.log('end')
