const TODOS = require('../mock-data/todos')

class TodoService {
    constructor() {
        console.log('todo service is intialized')
    }
    //api
    //i want to retun data with promise with 2000ms delay.
    findAll() {
        return JSON.stringify(TODOS);
    }
}
module.exports = TodoService;