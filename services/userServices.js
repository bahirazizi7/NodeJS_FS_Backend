const { findUser, saveUser } = require("../db/db")
const bcrypt = require("bcrypt")
const errorTemplate = require("../templates/errorTemplate")
const jwt = require('jsonwebtoken');
const User = require("../model/userModel");
require("dotenv").config()


exports.registerUser = async (req, res) => {
    try {
        const user = await findUser({ email: req.body.email })
        if (user) {
            throw new Error("User exist! login ")
        }
        else {
            const user = new User()
            const newUser = Object.assign(user, req.body)
            const hash = await bcrypt.hash(newUser.password, 10)

            newUser.password = hash
            const savedUser = await saveUser(newUser)
            res.status(201).json({
                message: "Successfuly created user",
                user: savedUser
            })
        }

    } catch (error) {
        return errorTemplate(res, error, error.message)
    }

}




exports.loginUser = async (req, res) => {
    try {
        const loggedUser = await findUser({ email: req.body.email })
        if (!loggedUser) {
            throw new Error("Authentication faild: User not found")
        }
        else {
            const result = await bcrypt.compare(req.body.password, loggedUser.password)
            if (result) {
                loggedUser.password = null
                const token = jwt.sign({ user: loggedUser }, process.env.jwt_secret)
                return res.status(201).json({
                    user: loggedUser,
                    logged: true,
                    token: token,
                    message: "Login successfuly"
                })

            } else {
                throw new Error("Authentication faild: Email or password not match")
            }
        }

    } catch (error) {
        return errorTemplate(res, error, error.message)

    }

}

