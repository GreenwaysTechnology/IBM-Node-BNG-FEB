const express = require('express');
const TODOS = require('../mock-data/todos')

const todorouter = express.Router()

//todomiddlewares

todorouter.use(function (req, res, next) {
    console.log(`All todos`)
    next();
});

todorouter.use('/filter', function (req, res, next) {
    //biz logic
    console.log(`All todos -id`)
    next();
});


//todos apis
todorouter.get('/list', function (req, res) {
    res.json(TODOS)
});
todorouter.get('/:id', function (req, res) {
    //read Request parameter
    const id = parseInt(req.params.id)
    const filteredtodos = TODOS.filter(todo => {
        return todo.id === id;
    });
    res.json(filteredtodos);
});
todorouter.post('/', function (req, res) {
    // let todo = ''
    // req.on('data', function (chunk) {
    //     todo += chunk;
    // });
    // req.on('end', function (chunk) {
    //     //biz logic
    //     TODOS.push(JSON.parse(todo))
    //     res.json(TODOS)
    // });
    const todo = req.body;
    console.log(todo);
    TODOS.push(todo)
    res.json(TODOS);
});
todorouter.put('/', function (req, res) {
    res.end('todos api -put')
});
todorouter.delete('/', function (req, res) {
    res.end('todos api -delete')
});

module.exports = todorouter;