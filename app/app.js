const express = require("express")
const cors = require("cors")
const userRouter = require("../router/userRouter")

const app = express()

// Use middleware for contracting the json payload
app.use(express.json())

// Use middleware for url encoding 
app.use(express.urlencoded({ extended: true }))

// Use middleware to handle the cors policy 
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({ message: "Server is up" })
})

//Routers
app.use('/users', userRouter)


// Bad url error handling with middleware
app.use((req, res, next) => {
    const error = new Error("Not Found")
    error.status = 404
    next(error)
})
// catch up the error 
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status
        }
    })

})

module.exports = app
