const express = require('express')
const routes = require('./src/routes')

const app = express()
app.use(express.json())

// server port
const port = 3000

// log all requests
app.use((req,res,next) => {
    console.log(`${req.method} ${req.originalUrl} ${JSON.stringify(req.body)}`)
    next()
})

routes.register(app)

app.listen(port, () => console.log(`Properties listening on ${port}`))