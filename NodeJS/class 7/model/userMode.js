const mongoose = require('mongoose')


const Schema = mongoose.Schema;


const signupSchema = new Schema({
    fname: String,
    email: String,
    password: String,
})

const signupModel = new mongoose.model('signup', signupSchema)
module.exports = signupModel