const database = require('../utils/Database')

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

        // let replacement = this.mergeObjects(currentDocument, editedfields);

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

// merge and replace old values. add value if not exists
    mergeObjects (current, edited){
        var newObj = {}
        for (var attrname in current) { newObj[attrname] = current[attrname] }
        for (var attrname in edited) { newObj[attrname] = edited[attrname] }

        return newObj
    }
}

const property = new Property
module.exports = property