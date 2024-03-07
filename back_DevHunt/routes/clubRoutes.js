const router = require('express').Router()
const { createClub, getAllClub, getClubById, updateClubById, deleteClubById } = require('../controllers/clubController')
const { createEvent, upadateEventById, deleteEventById, getEventById, getAllEvents } = require('../controllers/eventClubController')
const { authenticate } = require('../middlewares/auth')

//clubroutes
router.route('/')
   .get(getAllClub)
   .post(authenticate, createClub)
router.route('/:id')
   .get(authenticate, getClubById)
   .put(authenticate, updateClubById)
   .delete(authenticate, deleteClubById)


//eventsRoutes   
router.route("/:clubId/events")
   .post(authenticate, createEvent)
   .get(authenticate, getAllEvents)
router.route("/:clubId/events/:eventId")
   .put(authenticate, upadateEventById)
   .delete(authenticate, deleteEventById)
   .get(authenticate, getEventById)
module.exports = router