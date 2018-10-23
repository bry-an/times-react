const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String, 
        unique: true, 
        required: true
    }, 
    hash: {
        type: String, 
        required: true
    }, 
    isDeleted: {
        type: Boolean, 
        default: false
    }, 
    createdDate: {
        type: Date, 
        default: Date.now
    },
    savedArticles: [{
        type: Schema.Types.ObjectId, 
        ref: 'Article'
    }]

})

const User = mongoose.model('User', userSchema)
module.exports = User