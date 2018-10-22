const config = require('../config.json')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const db = require('../models')
const User = db.User

module.exports = {
    authenticate, 
    create, 
    delete: _delete
}

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
        user.hash = bcrypt.hash(userParam.password, 10)
    }

    //save user
    await user.save()
}

_delete = async (id) => {
    await User.findByIdAndDelete(id)
}