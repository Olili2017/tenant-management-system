const express = require('express')
const config = require('./config')

const app = express()

app.use(express.json())

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "172.22.0.2")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept")
    console.log(`${req.method} ${req.originalUrl} ${JSON.stringify(req.body)}`)
    next()
})

app.get('/serve/:service', (req,res) => {
    res.json(getConfig(req.params.service))
})

const getConfig = (service) => config.services[service].db || { message : "service unknown"}

app.post('/serve/:need', (req,res) => {

    let need = req.params.need;
    let name = req.body.name;
    let output = {
        message : null,
        data : []
    }

    switch (need){
        case 'db':
            // check if requested cluster name is known
            output = config.database[name] ?
                    { message: "200 OK", data: config.database[name] } :
                    { message : "404 NOT FOUND", data: null}
            break
        default:
            output = { message : "404 NOT FOUND", data : ["you made a request for an undefined cluster"]}
            break
    }

    return res.json(output)

})


app.listen(5000, () => {
    console.log("config server listening on : 5000")
})