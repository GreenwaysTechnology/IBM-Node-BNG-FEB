
const stream = (counter = 0, cb) => {
    let timerId = setInterval(() => {
        counter += 1;
        cb(counter)
    }, 1000);
    return timerId;
}
console.log('start')
let timerId = stream(10, counter => console.log(counter))
console.log('going')
setTimeout(() => {
    clearInterval(timerId)
}, 10000);
console.log('over')