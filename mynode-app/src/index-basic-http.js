const { createServer } = require('http')

const port = process.env.port || 8081;

//application
const app = function (req, res) {
    res.write('<h1>Hello</h1>')
    res.end()

    //Listening for Response events 
    res.on('finish', function () {
        console.log('Client Request has been finished')
    });
    res.on('close', function () {
        console.log('Client Request has been closed')
    });
}
//create server
const server = createServer(app)

//listen for server events
server.on('request', function (req, res) {
    console.log(`request is received on ${new Date()}`)
});

//start server
server.listen(port, function () {
    console.log('Server is up!');
});