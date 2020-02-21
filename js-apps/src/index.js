

async function fetch() {
    try {
        let name = await getName()
        let likes = await getLike();
        let fakeUser = await getUser();
        console.log(`Name : ${name} ,FakeUser ${fakeUser.name} Likes ${likes}`)
    } catch (err) {
        console.log(err)
    }
}

function getName() {
    return Promise.resolve('Subramanian')
}

function getLike() {
    return Promise.resolve(12)
}

function getUser() {
    let fakeUser = {
        name: 'admin'
    };
    if (fakeUser) {
        return Promise.resolve(fakeUser)
    }
    return Promise.reject({ error: 'error' })
}
fetch();