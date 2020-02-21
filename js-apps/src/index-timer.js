

//first async implemenation ; timer , set timeout

console.log('start'); //stack---frame--running
setTimeout(function () {
    console.log(' i am async ')
}, 1000);//stack---->transfer control to libuv|return to node-----os kernal -- thread is assigned
//start ticking clock---1000ms awake----signal----libu--assign handler inside 
//queue---loop--check whether stack is empty--if yes--handler --pushed --frame--prints results

console.log('going on');////stack---frame--running

///////////////////////////////////////////////////////////////////////////////

const sayGreet = cb => {
    setTimeout(() => cb(), 1000);
}

console.log('Hello')
sayGreet(() => console.log('I am delayed function'))
console.log('done!');

//////////////////////////////////////////////////////////////////////////////
//make async

const connect = cb => setTimeout(cb, 0);
connect(() => console.log('Server is connected!'));
