//const {name} = require('./mylib')
import { name, address, sayGreet } from './mylib';
import Employee from "./Employee";

console.log(name, address, sayGreet());
new Employee();