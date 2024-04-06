const mongoose = require('mongoose');
const Food = require('./food.model')
const config = require('../config/db.config')

mongoose.connect(`mongodb+srv://${config.USER}:${config.PASS}@cluster0.jowbmsn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

module.exports = {
    Food,
    mongoose
}