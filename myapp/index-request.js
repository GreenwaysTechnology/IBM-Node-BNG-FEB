const request = require('request');


async function fetchData() {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} iteration begins`)

        try {
            console.log('a')
            let mydata = await getData(i)
            console.log('b')
            console.log(mydata)
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
    //const url = `http://localhost:3000/todos/${i}`
    const url = `https://jsonplaceholder.typicode.com/todos/${i}`

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            request.get(url, (err, res, body) => {
                if (err) {
                    return reject(err)
                }
                resolve(JSON.parse(body));
            });
        }, 1000)

    });

}

fetchData();