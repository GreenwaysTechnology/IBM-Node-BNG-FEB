const express = require('express');
const todosrouter = require('./todos/todosapi')
const bodyParser = require('body-parser')


const port = process.env.port || 3000;

//create Expression Application
const app = express();

//global middleware registeration


//custom middleware.
app.use(function (req, res, next) {
    console.log(`Url ${req.url} - ${req.method}`)
    next();
});

app.use('/api/ibm',function (req, res, next) {
    console.log(`Welcome to ibm`)
    next();
});

//Body-parser middleware registeration.
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//bind router with app object
app.use('/api/todos/', todosrouter)


//start server
app.listen(port, function () {
    console.log('Express server is running!!')
})

