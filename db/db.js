const mongoose = require("mongoose")
require("dotenv").config()
const User = require('../model/userModel')

const connect = async () => {
    await mongoose.connect(process.env.mongoURL)
}

const disconnect = async () => {
    await mongoose.connection.close()
}

const findUser = async (obj) => {
    await User.findOne(obj)
}

const saveUser = async (newUser) => {
    return await newUser.save()
}

module.exports = { connect, disconnect, findUser, saveUser }
