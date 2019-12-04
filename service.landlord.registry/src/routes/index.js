const landlord = require('../models')

const register = (app) => {

    app.post('/landlord/create', (req,res) => {
        landlord.create(req.body).then(result => {
            res.json(result)
        })
    })

    app.put('/landlord/:id', (req,res) => {
        landlord.edit(req.params.id.toString(), req.body).then(result => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
    })

    app.patch('/landlord/:id', (req,res) => {
        landlord.remove(req.params.id)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    })

    app.get('/landlord/:id', (req,res) => {
        landlord.get(req.params.id).then(result => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
    })

}

exports = module.exports = { register }