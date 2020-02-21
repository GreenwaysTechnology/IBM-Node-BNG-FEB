const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const port = process.env.port || 3000;

//create Expression Application
const app = express();

//connect mongodb
function initDb() {
    mongoose.connect('mongodb://user1:user1@ds015760.mlab.com:15760/cap-shop-db', { useNewUrlParser: true }, () => {
        console.log('connected with mongodb');
    })
}
initDb()

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'hbs');

//start server
app.listen(port, function () {
    console.log('Express server is running!!')
})

