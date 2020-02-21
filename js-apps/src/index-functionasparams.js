

//a =10
//b=20

//a =10
//b=20;
function add(a, b) {
    return a + b;
}
//hardcoded literals
add(10, 10);
//with variables
let x = 10;
let y = 20;
add(x, y);
/////////////////////////////////////////////////////////////////////////////////

//greet=function () {
// console.log('Hello')
//}
function sayGreeter(greet) {
    let r = greet('Hello');
    console.log(r);
}

//function as parameter

sayGreeter(function (message) {
    //console.log(message)
    return message;
});

function sayWelcome(welcome) {
    console.log(welcome('hai'));
}
let hai = function (message) {
    // console.log(message)
    return message;
}
sayWelcome(hai);
/////////////////////////////////////////////////////////////////////////////////

let requestHandler = function (connect) {
    connect('Server is Connected');
};

requestHandler(function (status) {
    console.log(status)
});

let responseHandler = connect => connect('Server is Connected');

responseHandler(status => console.log(status))
//////////////////////////////////////////////////////////////////////////////////

const login = (username, password, resolve, reject) => {
    if (username === 'admin' && password === 'admin') {
        resolve(username);
    } else {
        reject('login failed');
    }
}

login('admin','admin',username => console.log(`Welcome to ${username}`), err => console.log(err))
login('guest','guest',username => console.log(`Welcome to ${username}`), err => console.log(err))
