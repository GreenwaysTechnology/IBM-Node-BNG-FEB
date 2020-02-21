//const r=require('./mylib')
const { name, sayGreet, address, skills } = require('./mylib');
const Employee = require('./Employee')

// console.log(r.name,r.sayGreet(),r.address.city);
// r.skills.forEach(s=>console.log(s))

console.log(name, sayGreet(), address.city);
skills.forEach(s => console.log(s))

let emp = new Employee();
console.log(emp.calculateSalary())