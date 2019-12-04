const axios = require('axios')
const database = require('../database')


axios.get('http://localhost:5000/serve/service.landlord.registry').then(config => {
    database.setHost(config.data.host)
    database.setUser(config.data.username)
    database.setPass(config.data.pass)
    database.setBucketName(config.data.bucket)

}).catch(err => {
    console.log(`Error gettting config: ${JSON.stringify(err)}`)
})

class Landlord {
    async create(landlord){
        const { name, age, username, email, phone, sex, next_of_kin } = landlord
        landlord = {
            id : Math.ceil(Math.random() * 100000),
            name : name,
            age : age,
            username : username,
            email : email,
            phone : phone,
            rating : 0.0,
            sex : sex,
            properties : [],
            next_of_kin : next_of_kin,
            date_created : new Date().getTime()
        }

        let insert = null

        if (!this.validateAllObjectValuesAreCorrectFormat(landlord)){
            return false
        }


        await database
            .insert(landlord.email, landlord)
            .then(result => {
                insert = result
                return result
            }).catch(err => {
                return err
            })

        return insert
    }

    async addProperty(landlordId, propertyId){
        var output = null
        await this.edit(landlordId, { properties : propertyId }).then(edited => {
            output = edited
        }).catch(err => {
            output = err
        })
        return output
    }

    async remove (id){
        let output = null
        await database.remove(id).then(res => {
                output = res
            })
            .catch(err => {
                output = err
            })
        return output
    }

    async get (id){
        let landlord = null
        await new Promise(function (resolve,reject){
            database.get(id).then(result => {
                landlord = result
                resolve(result)
            }).catch(err => {
                landlord = {message : err.message, data : []}
                reject(landlord)
            })
        })
        return landlord
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
    validateAllObjectValuesAreCorrectFormat (landlord){

        // validate input types
        if (
            typeof landlord.name !== 'string' ||
            typeof landlord.username !== 'string' ||
            typeof landlord.email !== 'string' ||
            typeof landlord.phone !== 'string' ||
            typeof landlord.age !== 'number' ||
            (landlord.sex.length > 2 && landlord.sex.length === 0) ||
            typeof landlord.next_of_kin !== 'object'
        ){
            return false
        }

        return true
    }
}
const landlord = new Landlord()
module.exports = landlord