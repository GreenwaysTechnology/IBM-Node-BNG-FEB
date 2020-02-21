const fetch = require('node-fetch');


async function fetchData() {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} iteration begins`)

        try {
            console.log('a')
            let response = await getData(i)
            let todo = await response.json()
            console.log(todo);
        }
        catch (err) {
            console.log(err)
            break;
        }
        console.log(`${i} iteration over`)
    }
    console.log('end of loop')
}

function getData(i) {
    const url = `http://localhost:3000/todos/${i}`
    //const url = `https://jsonplaceholder.typicode.com/todos/${i}`

    return fetch(url);


}

fetchData();