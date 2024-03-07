const model = require('../models')
const fs = require('fs')

exports.createEvent = async (req, res) => {
   const { legend, imageEvent } = req.body
   if(!legend) return res.status(409).json({ message: "Legend is required." })
   const club = await model.Club.findByPk(req.params.clubId)
   if(!club) return res.status(404).json({ message: "Club not found" })
   if(req.user.id !== club.UserId) return res.status(401).json({ message: "You cannot create an event" })

   // Check the image if define
   const image = imageEvent
      ? `${req.protocol}://${req.get('host')}/images/${imageEvent}`
      : `${req.protocol}://${req.get('host')}/images/default.jpg`
   // create the user
   try {
      const event = await model.Event.create({ legend, imageEvent: image, clubId: req.params.clubId})
      return res.status(201).json(event)
   } catch (error) {
      return res.status(500).json({message: "Failed to create event."})
   }
}
exports.upadateEventById = async (req, res) => {
   const { legend, imageEvent } = req.body
   const event = await model.Event.findByPk(req.params.eventId)
   if(!event) return res.status(404).json({ message: "Event not found" })
   try{
      const club = await model.Club.findByPk(req.params.clubId)
      if(!club) return res.status(404).json({ message: "Club not found" })
      if(req.user.id !== club.UserId) return res.status(401).json({ message: "You cannot update this event" })
      if(imageEvent){
         const filename = event.imageEvent.split('/images/')[1]
         if(filename !== 'default.jpg'){
            fs.unlink(`uploads/${filename}`, (err) => {
                  if(err) throw err
            })
         }
      }
      event.legend = legend || event.legend
      event.imageEvent = imageEvent
         ? `${req.protocol}://${req.get('host')}/images/${imageEvent}` 
         : event.imageEvent
      //update event
      await event.save()
      return res.status(200).json(event)
   } catch (error) {
      return res.status(500).json({ message: "Failed to update event" })
   }
}
exports.deleteEventById = async (req, res) => {
   const event = await model.Event.findByPk(req.params.eventId)
   if(!event) return res.status(404).json({ message: "Event not found"})
   try{
      const club = await model.Club.findByPk(req.params.clubId)
      if(!club) return res.status(404).json({ message: "Club not found"})
      if(req.user.id !== club.UserId) return res.status(401).json({ message: "You cannot delete this event" })
      await event.destroy()
      const filename = event.imageEvent.split('/images/')[1]
      if(filename !== 'default.jpg'){
         fs.unlink(`uploads/${filename}`, (err) => {
               if(err) throw err
         })
      }
      return res.status(200).json(event)
   } catch (error) {
      return res.status(500).json({ message: "Failed to update event" })
   }
}
exports.getEventById = async (req, res) => {
   const club = await model.Club.findByPk(req.params.clubId)
   if(!club) return res.status(404).json({ message: "Club doesn't exist"})
   try {
      const event = await model.Event.findByPk(req.params.eventId)
      if(!event) return res.status(404).json({ message: "Event doesn't exist" })

      return res.status(200).json(event)
   } catch (error) {
      return res.status(500).json({ message: "Internal server error" })
   }
}
exports.getAllEvents = async (req, res) => {
   const club = await model.Club.findByPk(req.params.clubId)
   if(!club) return res.status(404).json({ message: "Club doesn't exist"})
   try {
      const event = await model.Event.findAll({
         where: {
            ClubId: req.params.clubId
         }
      })
      if(!event) return res.status(404).json({ message: "No such events" })

      return res.status(200).json(event)
   } catch (error) {
      return res.status(500).json({ message: "Internal server error" })
   }
}