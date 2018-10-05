const router = require('express').Router()
const articlesController = require('../../controllers/articlesController')

router.route('/')
    .get(articlesController.findAll)
    .post(articlesController.create)

router.route('/article/:id')
    .delete(articlesController.delete)

module.exports = router
