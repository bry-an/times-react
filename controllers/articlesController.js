const db = require('../models')

module.exports = {
    findAll: (req, res) => {
        db.Article
            .find(req.query)
            .then(response => res.json(response))
            .catch(err => res.status(422).json(err))
    }, 
    create: (req, res) => {
        db.Article
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }, 
    delete: (req, res) => {
        db.Article
            .findById({
                _id: req.params.id
            })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
}