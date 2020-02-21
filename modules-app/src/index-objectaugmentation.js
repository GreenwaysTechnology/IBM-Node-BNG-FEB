

let product = {};
//add
product.id =10;
product.name ='phone';
//update
product.name ='tv'
//delete
delete product.name;

//literate
for(key in product){
    console.log(key , product[key])
}
console.log(product);
