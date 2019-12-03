const express = require('express')
const axios = require('axios')
const landlord = require('./src/models/landlord')

const app = express()

app.use(express.json())

app.use((req,res,next) => {
    console.log(`${req.method} - ${req.body}`)
    next()
})

app.get('/', (req,res) => {
    axios.post('http://localhost:5000/serve/db', {name : "tenants"})
        .then(result => {
            res.json(result.data.data)
        })
        .catch(err => {
            res.json(err)
        })
    // res.send("landlord")
})

app.post('/landlord/create', (req,res) => {
    landlord.create(req.body).then(result => {
        res.json(result)
    })
})

app.put('/landlord/:id', (req,res) => {
    // TODO edit customer
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

app.listen(5003, () => {
    console.log("Landlord listening on 5003")
})