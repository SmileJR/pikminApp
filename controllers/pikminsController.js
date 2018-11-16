const User = require('../models/User')
const Pikmin = require('../models/Pikmin')

const pikminsController = {
    index: (req, res) => {
        let userId = req.params.userId
        User.findById(userId).populate('pikmins')
        .then((user) => {
            res.send(user.pikmins)
        })
        //index will pull up all the pikmin in a specfic users inventory
    },
    show: (req, res) => {
        let pikminId = req.params.pikminId
        Pikmin.findById(pikminId)
        .then((pikmin) => {
            res.send(pikmin)
        }) 
        // show will pull up one specific pikmin
    },
    create: (req, res) => {
        let pikminId = req.params.pikminId
        User.findById(pikminId)
        .then((user) => {
            console.log(user)
            Pikmin.create(req.body)
            .then((newPikmin) => {
                console.log(newPikmin)
                user.pikmins.push(newPikmin)
                user.save()
                res.send(newPikmin)
            })
        })
        // create a whole new pikmin
    },
    delete: (req, res) => {
        let pikminId = req.params.pikminId
        Pikmin.findByIdAndDelete(pikminId)
        .then(() => {
            res.send(200)
        })
        //delete a specific pikmin
    },
    update: (req, res) => {
        let pikminId = req.params.pikminId
        Pikmin.findByIdAndUpdate(pikminId, req.body, {new: true})
        .then((updatedPikin) => {
            updatedPikin.save()
            res.send(updatedPikin)
        }) 
        // update a specific pikmin
    }
    
}

module.exports = pikminsController