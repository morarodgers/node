
const jwt = require('jsonwebtoken')

const logon = async (req, res) => {
    const {username, password} = req.body

    if(!username || !password) {
        res.status(401).json({message: 'Provide Email and Password'})
    }

    const token = jwt.sign({username}, process.env.JWT_SECRET, {expiresIn: '90d'})

    console.log(username, password);
    res.status(200).json({token})
}

const hello = async (req, res) => {
console.log(req.user);

      res.status(200).json({
        message: `Hello, ${req.user.username}`,
        secret:`Here is your authorised data`})
    }

module.exports = {
    logon, 
    hello
}