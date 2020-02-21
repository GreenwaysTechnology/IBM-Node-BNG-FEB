
const getUser = (resolve, reject) => {
    let fakeuser = 'adminxx';
    //let fakeuser
    if (fakeuser) {
        setTimeout(() => {
            resolve(fakeuser)
        }, 100);
    } else {
        setTimeout(() => {
            reject('No user found')
        }, 100);
    }
};

const login = (user, resolve, reject) => {

    if (user === 'admin') {
        setTimeout(() => {
            resolve(user)
        }, 200);
    } else {
        setTimeout(() => {
            reject('login failed')
        }, 100);
    }

}

const adminPanel = user => console.log(`Welcome to ${user}`)
const errPanel = err => console.log(err)

getUser(user => {
    login(user, user => adminPanel(user), err => errPanel(err))
}, err => console.log(err)); 