

const connect = async () => {
    console.log("mongo connection")
}

const disconnect = async () => {
    console.log("mongodb disconnection")
}

const findUser = async (obj) => {
    return Promise.resolve({
        firstName: "Bahir",
        lastName: "Azizi",
        address: "phase-7 sector -A IMSciences",
        city: "Peshawar",
        state: "KPK",
        zipCode: "2500",
        email: "bahirazizi7@gmail.com",
        password: "just1234"
    })
}

const saveUser = async (newUser) => {
    return Promise.resolve({
        firstName: "Bahir",
        lastName: "Azizi",
        address: "phase-7 sector -A IMSciences",
        city: "Peshawar", 
        state: "KPK",
        zipCode: "2500",
        email: "bahirazizi7@gmail.com",
        password: "just1234"
    })
}

module.exports = { connect, disconnect, findUser, saveUser }
