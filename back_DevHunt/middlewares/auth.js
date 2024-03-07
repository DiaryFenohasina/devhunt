const jwt = require('jsonwebtoken')

exports.authenticate = (req, res, next) => {
   try {
      const token = req.headers.authorization.split(' ')[1]
      const decodedToken = jwt.verify(token, 'TOKEN')
      req.user = {
         id: decodedToken.id,
         isMentor: decodedToken.isMentor
      }
      next()
   } catch (error) {
      res.status(401).json("User not authentified")
   }
}
// exports.authorizedAsAdmin = (req, res, next) => {
//    if(req.user && req.user.isMentor){
//       next()
//    }else{
//       res.status(401).json({message: "User not an Admin authentified!"})
//    }
// }