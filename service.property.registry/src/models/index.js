const database = require('../database')
const axios = require('axios')

axios.get('http://localhost:5000/serve/service.properties.registry').then(config => {
    database.setHost(config.data.host)
    database.setUser(config.data.username)
    database.setPass(config.data.pass)
    database.setBucketName(config.data.bucket)
}).catch(err => {
    console.log(`Error gettting config: ${JSON.stringify(err)}`)
})

class Property {
    async create(property){

        property = {
            "id": Math.ceil(Math.random() * 999999).toString(),
            "landlord": property.landlord,
            "name": property.name,
            "location": property.location,
            "address": property.address,
            "helpline": property.helpline,
            "email": property.email,
            "rating": 0,
            "created": new Date().getTime()
        }

        let res = null

        await new Promise((resolve, reject) => {

            let response = database.insert(property.id, property)

            if (response.message){
                reject(response)
            }else {
                database.get(property.id).then(res => {  resolve(res) })
            }
        }).then(cas => {
            res = cas
        }).catch(err => {res = err})


        return res
    }

    async get (id){
        let output = null
        await new Promise(function (resolve,reject) {
            database.get(id).then(res => {  resolve(res) })
        }).then(property => {
            output = property
        })

        return output
    }

    async edit(id, editedfields){

        let output = null

        await new Promise(function (resolve, reject) {

            database.get(id).then(currentDocument => {
                database.replace(id,currentDocument, editedfields)
                    .then(edited => {
                        resolve(edited)
                    }).catch(err => {
                        reject(err)
                    })
            })
        }).then(out => { output = out}).catch(out => output = out)

        return output

    }

}

const property = new Property
module.exports = property