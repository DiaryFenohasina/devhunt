const model = require('../models')
const fs = require('fs')

exports.createClub = async (req, res) => {
   const { clubName, clubBio, clubDescription, logo } = req.body
   if(!clubName) return res.status(409).json({ message: "Name is required." })
   if(!clubDescription) return res.status(409).json({ message: "Description is required." })

   // Check if user already exists
   const existingClub = await model.Club.findOne({ where: {clubName} })
   if(existingClub) return res.status(400).json({ message: "Club name already used." })

   // Check the image if define
   const image = logo
      ? `${req.protocol}://${req.get('host')}/images/${logo}`
      : `${req.protocol}://${req.get('host')}/images/default.jpg`

   // create the user
   try {
      const club = await model.Club.create({...req.body, logo: image, UserId: req.user.id})
      return res.status(201).json(club)
   } catch (error) {
      return res.status(500).json({message: "Failed to create club."})
   }
}
exports.getAllClub = async (req, res) => {
   try {
      const limit = 10
      const page = req.query.page || 1

      const offset = (page - 1) * limit
      const searchQuery = ''

      const clubs = await model.Club.findAll({
         where: {
            clubName: { [model.Sequelize.Op.like]: `%${searchQuery}%` }
         },
         limit: limit,
         offset: offset,
         include: [
            {model: model.User, as: 'creator', attributes: ['id', 'name', 'firstname', 'imageProfile']},
            // {model: model.Event, as: 'events'}
         ],
         order: [['createdAt', 'DESC']]
      })
      if(clubs.length === 0) return res.status(404).json({ message : "No such Clubs" })
      return res.status(200).json(clubs)
   } catch (error) {
      return res.status(500).json({message: "Internal server error"})
   }
}
exports.getClubById = async (req, res) => {
   const { id } = req.params
   try {
      const club = await model.Club.findByPk(id, {
         include: [
            {model: model.User, as: 'creator', attributes: ['id', 'name', 'firstname', 'imageProfile']},
            {model: model.Event, as: 'events'}
         ],
      })
      if(!club) return res.status(404).json({ message: "Club not found" })
      return res.status(200).json(club)
   } catch (error) {
      return res.status(500).json({ message: "Internal server error" })
   }
}
exports.updateClubById = async (req, res) => {
   const { id } = req.params
   const { clubName, clubBio, clubDescription, logo } = req.body
   try {
      const club = await model.Club.findByPk(id)
      if(!club) return res.status(404).json({ message: "Club not found" })
      if(req.user.id !== club.UserId) return res.status(401).json({message: "Cannot update this club"})
      // delete the imageProfile preceding
      if(logo){
         const filename = club.logo.split('/images/')[1]
         if(filename !== 'default.jpg'){
            fs.unlink(`uploads/${filename}`, (err) => {
                  if(err) throw err
            })
         }
      }
      club.clubName = clubName || club.clubName
      club.clubBio = clubBio || club.clubBio
      club.clubDescription = clubDescription || club.clubDescription
      club.logo = logo
         ? `${req.protocol}://${req.get('host')}/images/${logo}` 
         : club.logo
      //update club
      await club.save()
      return res.status(200).json(club)
   } catch (error) {
      return res.status(500).json({ message: "Failed to update profile" })
   }
}
exports.deleteClubById = async (req, res) => {
   const { id } = req.params
   try {
      const club = await model.Club.findByPk(id)
      if(!club) return res.status(404).json({ message: "Club not found" })
      if(req.user.id !== club.UserId) return res.status(401).json({message: "Cannot delete this club"})
      await club.destroy()
      const filename = club.logo.split('/images/')[1]
      if(filename !== 'default.jpg'){
         fs.unlink(`uploads/${filename}`, (err) => {
               if(err) throw err
         })
      }
      return res.status(200).json(club)
   } catch (error) {
      return res.status(500).json({ message: "Failed to delete this club" })
   }  
}