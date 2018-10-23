const db = require('../models')
const userService = require('../users/userService')

module.exports = {
    authenticate: (req, res, next) => {
        userService.authenticate(req.body)
            .then(user => user
                ? res.json(user)
                : res.status(400)
                    .json({
                        message: 'Username or password is incorrect'
                    }))
            .catch(err => next(err))
    }, 
    register: (req, res, next) => {
        userService.create(req.body)
            .then(() => res.json({
                message: 'User created'
            }))
            .catch(err => next(err))
    }, 
    delete: (req, res, next) => {
        userService.delete(req.params.id)
            .then(() => res.json({
                message: 'User deleted'
            }))
            .catch(err => next(err))
    }, 
    getCurrent: (req, res, next) => {
        userService.getById(req.user.sub)
            .then(user => user 
                ? res.json(user)
                : res.sendStatus(404))
            .catch(err => next(err))
    }

}
