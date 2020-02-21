

let price = 10.8978.toFixed(2);
console.log(price);

let name = "subramanian".toUpperCase();
console.log(name);

const list = new Array(1, 2, 3, 4);

const names = ['A', 'b', 'c'];

//loops
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//iterators
names.forEach((item, index) => console.log(item));

//
const customers = [
    { id: 1, name: 'A1' },
    { id: 1, name: 'A2' },
    { id: 1, name: 'A3' }
];
customers.forEach((customer,index)=>console.log(`${customer.id} ${customer.name}`))

//convert object to string
let customersJson=JSON.stringify(customers)
console.log(customersJson)
let custob =JSON.parse(customersJson)
console.log(custob)