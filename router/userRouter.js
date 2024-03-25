const express = require("express")
const router = express.Router()
const User = require("../model/userModel")
const { findUser, saveUser } = require('../db/db')
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")

router.post("/register", async (req, res, next) => {
    findUser({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(409).json({ message: "User exist; try logging in" })
            }
            else {
                // encrypt the password 
                const user = new User()
                // user._id = mongoose.Types.ObjectId()
                const newUser = Object.assign(user, req.body)
                bcrypt.hash(newUser.password, 10, (error, has) => {
                    if (error) {
                        res.status(502).json({ error: error.message })
                    }
                    else {
                        newUser.password = has
                        saveUser(newUser)
                            .then(user => {
                                console.log(user)
                                res.status(201).json({ message: "Successfuly resgitered", user: user })
                            })
                            .catch(error => {
                                res.status(501).json({ error:"fuck this"+ error.message })
                            })

                    }
                })
            }

        })
        .catch(error => {
            error: { error.message }
        })

})

router.post("/login", (req, res, next) => {

})


module.exports = router