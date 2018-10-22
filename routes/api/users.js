
const router = require('express').router()
const usersController = require('../../controllers/usersController')

router.route('/authenticate')
    .post(usersController.authenticate)

router.route('/register')
    .post(usersController.register)

router.route('/delete')
    .delete()
