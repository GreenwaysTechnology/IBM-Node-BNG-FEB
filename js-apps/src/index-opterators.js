
let a = 10;
let b = 10;
let c = a == b;
console.log(c)

//type + content
let x = "10";
let y = 10;
let z = x === y;
console.log(z)

let isWorking = true;

if (isWorking) {
    console.log('working')
} else {
    console.log('notworking')
}

if (x === y) {
    console.log('X and y are equal')
} else {
    console.log('X and y are not  equal')

}
/////////////////////////////////////////////////////////////////////////

let price = 0;

if(price){
    console.log('Price is there')
}else{
    console.log('No price')
}

let name;
let result = name ? "Hello!" : "No Name";
console.log(name);

//||
let enabled =true;
let raised = true;

let status = enabled || raised;
console.log(status);

let start = 1;
// if first operand is true, the result is first operand else second
let position =  start || 10;
console.log(position);

//! ,!!

let myname ='hello'
let nameResult =!myname;
console.log(nameResult);

console.log(typeof myname)