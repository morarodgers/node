const jwt = require('jsonwebtoken')

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.header('Authorization')

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({message: 'Unauthorized - no token provided'})
    }
    const token = authHeader.split(' ')[1]
    //console.log(token);

    try {
      const name_of_user = jwt.verify(token, process.env.JWT_SECRET)
      const {username} = name_of_user
      req.user = {username}
      next()
    } catch (error) {
      res.status(401).json({message: 'unauthorized'})
  }
}

module.exports = authenticationMiddleware
