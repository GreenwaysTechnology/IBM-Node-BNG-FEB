const TodoService = require('./services/TodoService');


let service = new TodoService();
////
console.log('Todos')
console.log(service.findAll());