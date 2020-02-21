

async function getName(){
     return "Subramanian"; //return Promise.resolve("Subramanian")
}
getName().then(name=>console.log(name));

async function getCounter(){
    return Promise.resolve(1)
}
getCounter().then(c=>console.log(c));

async function getError(){
    return Promise.reject({err:'error'})
}
getError().catch(err=>console.log(err));
