const expressJwt = require('express-jwt')
const config = require('../config.json')
const userService = require('../users/userService')


module.exports = jwt;

jwt = () => {
    const secret = config.secret
    return expressJwt({
        secret, 
        isRevoked
    })
    .unless({
        path: [
            'users/authenticate', 
            'users/register',
            '/'
        ]
    })
}

isRevoked = async (req, payload, done) => {
    const user = await userService.getById(payload.sub)

    //revoke token if user no longer exists
    if (!user) {
        return done(null, true)
    }

    done()
}