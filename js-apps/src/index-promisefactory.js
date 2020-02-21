

function getValue() {
    //resolve is factory method, which says success
    return Promise.resolve('done!') //returns Promise Object
}

console.log('start')
let promise = getValue()
//console.log(promise)
promise.then(result => console.log(result))
console.log('end')

function getError() {
    return Promise.reject('something went wrong')
}

let promiseErr = getError();
promiseErr.catch(err => console.log(err))

//
const getUser = () => {
    let fakeUser = 'admin';
    if (fakeUser) {
        return Promise.resolve(fakeUser)
    }
    return Promise.reject('something went wrong')
}
//builder/command chain/fulent pattern
getUser()
    .then(result => console.log(result))
    .catch(err => console.log(err))

///