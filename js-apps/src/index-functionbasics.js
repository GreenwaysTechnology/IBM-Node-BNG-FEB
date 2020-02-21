
//function declaration
function sayHello() {
    console.log('Hello');
}
//function invocation
sayHello()

function add() {
    let c = 10 + 10
    console.log(c)
}
add();
///////////////////////////////////////////////////////////////////////////////

//params and args:

//a,b args
//default args
function multiply(a = 1, b = 1) {
    let c = a * b;
    console.log(c)
}
//10,10 is params
multiply(10, 10);
multiply(undefined, 90);

//more params ,not known : ... rest operator
function logger(...arg) {
    console.log(arg)
}
logger('hello');
logger('hello', 'hey');
logger('hello', 'hai', 'welcome');

function getStockValue() {
    let value = 10;
    //return 10;
    return value;
}
console.log(getStockValue());

function isValid() {
    return;//undefind
}
let res = isValid() ? 'Valid' : 'NotValid'
console.log(res);
//login validation : admin and admin.