const express = require('express')
const property = require('./src/models/Property')

const app = express()
app.use(express.json())

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
    // res.json({hello : "data"})
})

app.listen(3000, () => console.log("Properties listening on 3000"))