const axios = require('axios')
var Database = require('../utils/database')

const options = {host : "localhost", username : "pidscrypt", pass : "Pidscrypt123567", bucket : "houses"}

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


        await new Database(options)
            .insert(landlord.email, landlord)
            .then(result => {
                insert = result
                return result
            }).catch(err => {
                return err
            })

        return insert

    }

    async remove (id){
        let output = null
        await new Database(options).remove(id).then(res => {
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
            new Database(options).get(id).then(result => {
                landlord = result
                resolve(result)
            }).catch(err => {
                landlord = {message : err.message, data : []}
                reject(landlord)
            })
        })

        return landlord
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

module.exports = Landlord