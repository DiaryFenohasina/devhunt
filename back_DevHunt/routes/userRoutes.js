const router = require('express').Router()
const { register, login, logout, getCurrentUserProfile, updateCurrentUserProfile, getUser, getSpecificUser, getMentors } = require('../controllers/userController')
const { authenticate } = require('../middlewares/auth')

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)

router.get('/mentor', authenticate, getMentors)

router.route("/me")
   .get(authenticate, getCurrentUserProfile)
   .get(authenticate, getSpecificUser)
   .put(authenticate, updateCurrentUserProfile)
router.route("/:id").get(authenticate, getUser)

module.exports = router