

function Employee(id = 1, name = 'Subramanian') {
    //instance variables
    this.id = id;
    this.name = name;
    //instance mehtods
    this.calculateSalary = function () {
        return 100;
    }

}
// let emp = new Employee();
// //access object properties : .,[]
// console.log(`Id ${emp.id} name ${emp.name} salary ${emp.calculateSalary()}`)

// let empOne = new Employee();
// emp.id = 9999;
// emp.name = 'Ram'
// console.log(`Id ${empOne.id} name ${empOne.name} salary ${empOne.calculateSalary()}`)


// let emptwo = new Employee(87777, 'Karthik');
// console.log(`Id ${emptwo.id} name ${emptwo.name} salary ${emptwo.calculateSalary()}`)


let emp = null;

//console.log(emp.id);

emp = new Employee();
//access object properties : .,[]
console.log(`Id ${emp.id} name ${emp.name} salary ${emp.calculateSalary()}`)

emp = new Employee();
emp.id = 9999;
emp.name = 'Ram'
console.log(`Id ${emp.id} name ${emp.name} salary ${emp.calculateSalary()}`)


emp = new Employee(87777, 'Karthik');
console.log(`Id ${emp.id} name ${emp.name} salary ${emp.calculateSalary()}`)






//class syntax

class Customer {
    constructor(id = 1, name = 'Subramanian') {
        this.id = id;
        this.name = name;
    }
    //methods
    calcuateInvoice() {
        return 1000
    }
    calcGST = () => 1000
}
let cust = null;
cust = new Customer();
console.log(`Id ${cust.id} name ${cust.name} GST ${cust.calcGST()}`);

cust = new Customer(8999, 'John');
console.log(`Id ${cust.id} name ${cust.name} GST ${cust.calcGST()}`);

/////////////////////////////////////////////////////////////////////////////////

//lieral pattern

const product = {
    id: 1,
    name: 'Phone',
    value: 90,
    getStock: function () {
        return 100
    },
    getQty: () => 10,
    getPrice() {
        return 111;
    },
    getTotalValue() {
        return this.value * this.getQty() * this.getPrice();
    }
}
product.name ='TV'
console.log(`${product.id} ${product.getTotalValue()}`)