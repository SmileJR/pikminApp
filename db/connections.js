const mongoose = require('mongoose')
require ('dotenv').config()


mongoose.connect('mongodb://localhost/project-3')

mongoose.connection.once('open', () => {
  console.log(`Mongoose has connected to MongoDB`)
})

mongoose.connection.on('error', (error) => {
  console.error(`MongoDB connection error!!! ${error}`)
  process.exit(-1)
})

module.exports = mongoose
