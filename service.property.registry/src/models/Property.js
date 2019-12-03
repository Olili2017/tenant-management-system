const database = require('../utils/Database')

class Property {
    async create(property){

        await new Promise((resolve, reject) => {
            database.insert(property.id, property, (err, cas) => {
                if (err) reject(err)

                if (cas) resolve(cas)
            })
        }).then(cas => {
            
        })

    }
}

const property = new Property
module.exports = property