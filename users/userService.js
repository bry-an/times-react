const config = require('../config.json')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const db = require('../models')
const User = db.User


authenticate = async ({ username, password }) => {
    const user = await User.findOne({ username })
    if (user && bcrypt.compare(password, user.hash)) {
        const { hash, ...userWithoutHash } = user.toObject()
        const token = jwt.sign({ sub: user.id }, config.secret, {expiresIn: '180 days'})
        return {
            ...userWithoutHash, 
            token
        }
    }
}

create = async (userParam) => {
    if (await User.findOne({ username: userParam.username })) {
        throw `Username ${userParam.username} is already taken`
    }
    const user = new User(userParam)

    //hash pw

    if (userParam.password) {
        bcrypt.hash(userParam.password, 10)
            .then(hash => user.hash = hash)
            .then(_=> user.save())
    }

    //save user
}

getById = async (id) => {
    return await User.findById(id).select('-hash')
}

_delete = async (id) => {
    await User.findByIdAndDelete(id)
}

module.exports = {
    authenticate, 
    create, 
    delete: _delete
}