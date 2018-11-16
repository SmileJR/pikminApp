const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const pikminController = require('../controllers/pokemonController')
// requiring cotrollers


// Routes for User
router.get('/api/users', userController.index)
// router.post()
// router.get()
// router.patch()
// router.delete()



// Routes for Pikmin
// router.get()
// router.post()
// router.get()
// router.patch()
// router.delete()


module.exports = router