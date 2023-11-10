
class CustomAPIError extends Error {
    constructor (message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (message, statusCode) => {
    return CustomAPIError(message, statusCode)
}

module.exports = {createCustomError, CustomAPIError}