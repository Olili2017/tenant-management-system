const express = require('express')
const routes = require('./src/routes')

const app = express()

app.use(express.json())

app.use((req,res,next) => {
    console.log(`${req.method} - ${req.body}`)
    next()
})

routes.register(app)

app.listen(5003, () => {
    console.log("Landlord listening on 5003")
})