
// function printEmployee(emp) {

//     const { id, name, city } = emp;

//     // console.log(`Id ${emp.id}`)
//     // console.log(`Name ${emp.name}`)
//     // console.log(`City ${emp.city}`)
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`City ${city}`)
// }

// function printEmployee({ id, name, city }) {
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`City ${city}`)
// }

const printEmployee = ({ id, name, city }) => {
    console.log(`Id ${id}`)
    console.log(`Name ${name}`)
    console.log(`City ${city}`)
}
printEmployee({ id: 1, name: 'a', city: 'bng' })