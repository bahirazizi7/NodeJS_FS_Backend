const express = require("express")
const router = express.Router()

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

router.post('/', (req, res, next) => {
    const name = req.body.name
    res.status(201).json({
        message: "Successful -POST ",
        metadata: {
            name: name,
            hostname: req.hostname,
            method: req.method
        }
    })
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