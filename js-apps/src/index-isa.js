

class Account {
    constructor(id) {
        this.id = id;
        console.log('account')
    }
    withdraw() {
        return 10.90;
    }
}
class SavingsAccount extends Account {
    constructor(id) {
        super(id);
        console.log('savings account')
    }
    withdraw() {
        return 100.90 * super.withdraw();
    }
}

let acc = new SavingsAccount(1222);
console.log(acc.id,acc.withdraw())