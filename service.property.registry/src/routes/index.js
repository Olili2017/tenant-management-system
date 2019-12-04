const property = require('../models')
const register = (app) => {
    app.post('/property/create', (req,res) => {

        property.create(req.body).then(result => {
            res.json({...result})
        }).catch(err => {
            res.json(err)
        })
    })

    app.get('/property/:id', (req,res) => {
        property.get(req.params.id.toString()).then(property => {
            res.json(property)
        })
    })

    app.put('/property/edit/:id', (req,res) => {

        property.edit(req.params.id.toString(), req.body).then(result => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
    })

    app.patch('/property/:id', (req,res) => {

    })

}

exports = module.exports = { register }