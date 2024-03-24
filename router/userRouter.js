const express = require("express")
const router = express.Router()
const User =require('../model/userModel')

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Successfuly -GET",
        metadata: {
            hostname: req.hostname,
            method: req.method
        }
    })
})

router.get('/:id', (req, res, next) => {
    res.status(200).json({
        message: "Successfuly -GET by id",
        metadata: {
            hostname: req.hostname,
            param: req.params
        }
    })
})

router.post('/', async(req, res, next) => {
    const {firstName, lastName, address, city, state, zipCode, email, password } = req.body
    const user= new User({
        firstName,
        lastName,
        address,
        city, 
        state,
        zipCode,
        email,
        password
    })
    await user.save()
    res.status(201).json({message:"Successfuly user created", userData: user})
   
})

router.put("/:id", (req, res, next) => {
    res.status(200).json({
        message: "Succssful -PUT",
        metadata: {
            id: req.params,
            hostname: req.hostname,
            method: req.method
        }
    })
})

router.delete("/:id", (req, res, next) => {
    res.status(200).json({
        message: "Successful -DELETE",
        metadata: {
            id: req.params.id,
            hostname: req.hostname,
            method: req.method
        }

    })

})



module.exports = router