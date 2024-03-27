
const errorTemplate = (res, error, message) => {
    return res.status(501).json({
        error: {
            message: message,
            status: error.status
        }
    })
}
module.exports = errorTemplate