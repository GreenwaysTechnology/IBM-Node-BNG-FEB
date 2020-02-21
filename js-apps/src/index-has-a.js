
class Department {
    constructor(name = 'Microservice') {
        this.name = name;
    }

}
class Address {
    constructor(city = 'BNG') {
        this.city = city;
    }

}

class Employee {
    constructor(id = 1, name = 'default', address = new Address(), department = new Department()) {
        this.id = id
        this.name = name
        this.address = address;
        this.department = department
    }
}
let emp = null;
let address = new Address();
emp = new Employee(1, 'Subramanian', address, new Department());
console.log(emp);
console.log(emp.name,emp.address.city,emp.department.name)

