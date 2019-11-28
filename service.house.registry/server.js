const express = require('express')
var House = require('./house')

const app = express()

app.use(express.json())

app.use((req,res,next) => {
    console.log(`Incoming ${req.method} on ${req.url}`)
    next()
})

const login = "daniel"


app.post('/house/create', (req,response) => {

    const {rent} = req.body
    let houseAttr = {occupant : null, rent : rent, tenants : [], create_date : new Date().getTime()}

    let house = new House()
    house.setLandlord(login)
    if (house.create(houseAttr)) {
        response.status(201).json({ message : "House created successfully!", data : houseAttr})
    }else {
        response.status(500).json({message : "Internal server error!", data : []})
    }

})

app.patch('/house/:id', (req, res) => {
    let house = new House()
    if(house.remove(`${login}:${req.params.id}`)){
        res.status(204).json({message : "Action completed."})
    } else {
        res.status(500).json({message : "Internal server error"})
    }
})

app.put('/house/:id', () => {
    let house = new House()
    if(house.remove(`${login}:${req.params.id}`)){
        res.status(204).json({message : "Action completed."})
    } else {
        res.status(500).json({message : "Internal server error"})
    }
})


app.listen(3001, () => {
    console.log("House service listening on %d", 3001);

})