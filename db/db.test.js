const { connect, disconnect, saveUser, findUser } = require('./db')
const mongoose = require("mongoose")
const User = require('../model/userModel')

jest.mock('./db')

beforeAll(async () => {
    return await connect();
})


// describe, test, expect
describe("User test in database ", () => {
    test("As user I want to save a user in dabase ", async () => {
        const newUser = new User({
            firstName: "Bahir",
            lastName: "Azizi",
            address: "phase-7 sector -A IMSciences",
            city: "Peshawar",
            state: "KPK",
            zipCode: "2500",
            email: "bahirazizi7@gmail.com",
            password: "just1234"
        })
        const user = await saveUser(newUser)
        expect(user.firstName).toBe("Bahir")
        expect(user.lastName).toBe("Azizi")
        expect(user.address).toBe("phase-7 sector -A IMSciences")
        expect(user.city).toBe("Peshawar")
        expect(user.state).toBe("KPK")
        expect(user.zipCode).toBe("2500")
        expect(user.email).toBe("bahirazizi7@gmail.com")
        expect(user.password).toBe("just1234")
    })
    test("Find user by any property", async () => {
        const obj = { firstName: "Bahir" }
        await findUser(obj)
            .then(user => {
                expect(user.firstName).toBe("Bahir")
                expect(user.lastName).toBe("Azizi")
                expect(user.address).toBe("phase-7 sector -A IMSciences")
                expect(user.city).toBe("Peshawar")
                expect(user.state).toBe("KPK")
                expect(user.zipCode).toBe("2500")
                expect(user.email).toBe("bahirazizi7@gmail.com")
                expect(user.password).toBe("just1234")
            })
            .catch(error => {
                console.log("error" + error.message)

            })
    })

})

afterAll(async () => {
    return await disconnect()
})
