const mongoose = require('mongoose')

const userSchema = new Schema({
    email: {
        type: String, 
        default: ''
    }, 
    password: {
        type: String, 
        default: ''
    }, 
    isDeleted: {
        type: Boolean, 
        default: false
    }, 
    signUpDate: {
        type: Date, 
        default: Date.now()
    },
    savedArticles: [{
        type: Schema.Types.ObjectId, 
        ref: 'Article'
    }]

})

const User = mongoose.model('User', userSchema)
module.exports = User