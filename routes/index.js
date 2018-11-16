const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const pikminsController = require('../controllers/pikminsController')
// requiring cotrollers


// // Routes for User
// router.get('/api/users', userController.index)
// router.post()
// router.get()
// router.patch()
// router.delete()



// Routes for Pikmin
router.get('/api/users/:userId/pikmins', pikminsController.index)
// show all the pikmin in a users inventory

router.get('/api/pikmins/:pikminId', pikminsController.show)
// show an individual pikmin

// router.post()
// create a new pikmin

// router.patch()
// update an exisiting pikmin

// router.delete()
// delete a pikmin from the inventory

module.exports = router