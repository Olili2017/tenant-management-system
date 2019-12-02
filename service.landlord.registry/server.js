const express = require('express')
const Landlord = require('./src/models/landlord')

const app = express()

app.use(express.json())

app.use((req,res,next) => {
    console.log(`${req.method} - ${req.body}`)
    next()
})

app.get('/', (req,res) => {
    res.send("Landlord")
})

app.post('/landlord/create', (req,res) => {


    new Landlord().create(req.body).then(result => {
        res.json(result)
    })
    // res.json(landlord)
})

app.put('/landlord/:id', (req,res) => {
    // TODO edit customer
})

app.patch('/landlord/:id', (req,res) => {
    // TODO remove customer
    new Landlord().remove(req.params.id)
        .then(result => {
            // result;
            // res.json({message : "200 Ok", data : "landlord removed successfully"})
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
})

app.get('/landlord/:id', (req,res) => {
    new Landlord().get(req.params.id).then(result => {
        res.json(result)
     }).catch(err => {
        res.json(err)
    })
})

app.listen(5003, () => {
    console.log("Landlord listening on 5003")
})