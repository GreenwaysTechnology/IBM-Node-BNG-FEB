

//Arrow functions
//old style
// const hai = function(){
//     console.log('hai')
// };

const hai = () => {
    console.log('Hai')
};
hai();

//if function has only one line of body: remove {}
const hello = () => console.log('Hello');
hello()

//multiple parameters with default value
const add = (a = 1, b = 1) => {
    const c = a + b;
    console.log(`Add Result ${c}`)
}
add()
//single parameter, without default : remove ()
const greeter = message => console.log(message);
greeter('Welcome')
//return value

const getStockValue = () => {
    return 100;
}
console.log(getStockValue())
//if funciton returns only value, remove {} and return statement
const getCounter = () => 1;
console.log(getCounter());

//if function takes single parameter,without default value, return the same

const pure = info => info;

console.log(pure('Pure function'));
