const bcrypt = require('bcrypt/bcrypt')
const model = require('../models')
const fs = require('fs')
const { generateToken } = require('../utils/generateToken')

exports.register = async (req, res) => {
   const { name, firstname, email, password, imageProfile, contact, level, background } = req.body
   if(!name) return res.status(409).json({ message: "Name is required." })
   if(!firstname) return res.status(409).json({ message: "Firstname is required." })
   if(!contact) return res.status(409).json({ message: "contact is required." })
   if(!level) return res.status(409).json({ message: "Level is required." })
   if(!background) return res.status(409).json({ message: "Background is required." })
   if(!email) return res.status(409).json({ message: "Email is required." })
   if(!password) return res.status(409).json({ message: "Password is required." })

   // Check if user already exists
   const existingUser = await model.User.findOne({ where: {email} })
   if(existingUser) return res.status(400).json({ message: "User already exist." })

   // Hash the passwowrd
   const hashedPassword = await bcrypt.hash(password, 10)

   // Check the image if define
   const image = imageProfile
      ? `${req.protocol}://${req.get('host')}/images/${imageProfile}` 
      : `${req.protocol}://${req.get('host')}/images/default.jpg`

   // create the user
   try {
      const user = await model.User.create({...req.body, password: hashedPassword, imageProfile: image})
      return res.status(201).json({
         id: user.id,
         name: user.name,
         firstname: user.firstname,
         imageProfile: user.imageProfile,
         email: user.email,
         contact: user.contact,
         level: user.level,
         backgound: user.backgound,
         isMentor: user.isMentor,
         token: generateToken(res, user)
      })
   } catch (error) {
      return res.status(500).json({message: "Failed to create user."})
   }
}
exports.login = async (req, res) => {
   const { email, password } = req.body
   try {
      // Check if user already exists
      const user = await model.User.findOne({ where: {email} })
      if(!user) return res.status(404).json({ message: "Invalid credentials" })
      
      // compare password
      const isPasswordValid = await bcrypt.compare(password, user.password)
      if(!isPasswordValid) return res.status(401).json({ message: "Invalid credentials"})
      
      // generate token
      return res.status(200).json({
         id: user.id,
         name: user.name,
         firstname: user.firstname,
         image: user.image,
         email: user.email,
         contact: user.contact,
         level: user.level,
         backgound: user.backgound,
         isMentor: user.isMentor,
         token: generateToken(res, user)
      })
   } catch (error) {
      return res.status(500).json({message: "Internal server error"})
   }
}
exports.logout = async (req, res) => {
   res.cookie('jwt', '', {
      httpOnly: true,
      expires: new Date(0)
  })
  res.status(200).json({message: "Logged out succesfully!"})
}
// exports.getAllUsers = async (req, res) => {
//    try {
//       const users = await model.User.findAll({
//          attributes: { exclude: ['password'] }
//       })
//       if(!users) return res.status(400).json({ message: "No such users." })
//       return res.status(200).json(users)
//    } catch (error) {
//       return res.status(500).json({ message: "Failed to get all users." })
//    }
// }
exports.getCurrentUserProfile = async (req, res) => {
   try {
      const user = await model.User.findByPk(req.user.id, {
         attributes: { exclude: ['password'] }
      })
      if(!user) return res.status(404).json({ message: "User not found" })
      return res.status(200).json(user)
   } catch (error) {
      return res.status(500).json({ message: "Internal server error" })
   }
}
exports.updateCurrentUserProfile = async (req, res) => {
   const { name, firstname, email, password, imageProfile, contact, level, background } = req.body
   try {
      const user = await model.User.findByPk(req.user.id)
      if(!user) return res.status(404).json({ message: "User not found" })
      
      //Check if password exist in the body request
      let hashedPassword
      if(password) {
         hashedPassword = await bcrypt.hash(password, 10)
      }
      if(imageProfile){
         const filename = user.imageProfile.split('/images/')[1]
         if(filename !== 'default.jpg'){
            fs.unlink(`uploads/${filename}`, (err) => {
                  if(err) throw err
            })
         }
      }
      user.name = name || user.name
      user.firstname = firstname || user.firstname
      user.email = email || user.email
      user.password = hashedPassword || user.password
      user.imageProfile = imageProfile
                           ? `${req.protocol}://${req.get('host')}/images/${imageProfile}` 
                           : user.imageProfile
      user.contact = contact || user.contact
      user.level = level || user.level
      user.background = background || user.background


      await user.save()
      return res.status(200).json(user)
   } catch (error) {
      return res.status(500).json({ message: "Failed to update profile" })
   }
}
exports.getUser = async (req, res) => {
   const { id } = req.params
   try {
      const user = await model.User.findByPk(id, {
         attributes: { exclude: ['password'] }
      })
      if(!user) return res.status(404).json({ message: "User not found" })
      return res.status(200).json(user)
   } catch (error) {
      return res.status(500).json({ message: "Internal server error" })
   }
}
// exports.updateUser = async (req, res) => {
//    const { id } = req.params
//    const { username, email } = req.body
//    try {
//       const user = await model.User.findByPk(id, {
//          attributes: { exclude: ['password'] }
//       })
//       if(!user) return res.status(404).json({ message: "User not found" })
      
//       // delete the imageProfile preceding
//       if(req.file){
//          const filename = user.imageProfile.split('/images/')[1]
//          if(filename !== 'default.jpg'){
//             fs.unlink(`uploads/${filename}`, (err) => {
//                   if(err) throw err
//             })
//          }
//       }
//       user.username = username || user.username
//       user.imageProfile = req.file
//          ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` 
//          : user.imageProfile
//       user.email = email || user.email

//       //update user
//       await user.save()
//       return res.status(200).json(user)
//    } catch (error) {
//       return res.status(500).json({ message: "Failed to update profile" })
//    }
// }
// exports.deleteUser = async (req, res) => {
//    const { id } = req.params
//    try {
//       const user = await model.User.findByPk(id, {
//          attributes: { exclude: ['password'] }
//       })
//       if(!user) return res.status(404).json({ message: "User not found" })
//       await user.destroy()
//       const filename = user.imageProfile.split('/images/')[1]
//       if(filename !== 'default.jpg'){
//          fs.unlink(`uploads/${filename}`, (err) => {
//                if(err) throw err
//          })
//       }
//       return res.status(200).json(user)
//    } catch (error) {
//       return res.status(500).json({ message: "Failed to delete user" })
//    }  
// }
exports.getSpecificUser = async (req, res) => {
   try {
      const user = await model.User.findAll({
         attributes: { exclude: ['password'] }
      })
      if(!user) return res.status(404).json({ message: "User not found" })
      return res.status(200).json(user)
   } catch (error) {
      return res.status(500).json({ message: "Internal server error" })
   }
}
exports.getMentors = async (req, res) => {
   try {
      const user = await model.User.findByPk({
         where: {
            isMentor: true
         },
         attributes: { exclude: ['password'] },
         include: [{model: model.Skill, through: {attributes: []}}]
      })
      if(!user) return res.status(404).json({ message: "User not found" })
      return res.status(200).json(user)
   } catch (error) {
      return res.status(500).json({ message: "Internal server error" })
   }
}
exports.switchToMentor = async (req, res) => {
   try {
      const user = await model.User.findByPk({
         where: {
            isMentor: true,
            id: req.user.id
         },
         attributes: { exclude: ['password'] }
      })
      if(!user) return res.status(404).json({ message: "User not found or you already a mentor"})
      return res.status(200).json(user)
   } catch (error) {
      return res.status(500).json({ message: "Internal server error" })
   }
}