
class CustomAPIError extends Error {
    constructor (message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (message, statusCode) => {
    return newCustomAPIError(message, statusCode)
}

module.exports = {createCustomError, CustomAPIError}