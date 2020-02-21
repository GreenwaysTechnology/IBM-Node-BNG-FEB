const EventEmitter = require('events');

//create Object for EventEmitter

let event = new EventEmitter();

//subscriber
event.on('hello', function (data) {
    console.log(`Event is fired : ${data}`)
});

//publisher
event.emit('hello', 'Hello Node')

//binding events with domain object

class Inventory extends EventEmitter {
    constructor() {
        super();
        //register subscriber
        this.on('sales', ({ id, name }) =>
            console.log(`Inventory has been updated ,${id} ${name}`)
        );

    }
    //biz ap
    sale(product) {
        this.emit('sales', product)
    }
}

let inventory = new Inventory();
inventory.sale({ id: 1, name: 'phone' });