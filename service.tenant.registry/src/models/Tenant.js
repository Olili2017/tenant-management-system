var Database = require('../utils/database')

const service = {
    config : { url : "http://localhost:3000"}
}
class Tenant {

    constructor(){
        this.database = null
        this.house
    }

    async getDatabase(){
        if (this.database) return this.database

        //get config
        await axios.post(`${service.config.url}/serve/db`,
            {name : "tenants"},
            {
                headers: {
                  "Content-Type": "application/json"
            }}).
            then(response => {
                if (response.data.message == "200 OK"){
                    const {host,username,pass,bucket} = response.data.data
                    this.database = new Database({host,username,pass}).bucket(bucket)
                }
            }).
            then(error => {
                if(error){
                    // TODO: fix error
                }
            })

        return this.database
    }

    create (tenant){
        let isTenantCreated = false

        getDatabase().then((bucket) => {
            bucket.insert(`${this.house}:${Math.ceil(Math.random() * 1000)}`,tenant,(err,res) => {
                if (err){
                    return
                } else {
                    isTenantCreated = true
                    return
                }
            })
        })

        return isTenantCreated
    }

    edit (id, editedTenant){
        let isTenantEdited

        getDatabase().then((bucket) => {
            bucket.replace(id,tenant,(err,res) => {
                if (err){
                    return
                } else {
                    isTenantCreated = true
                    return
                }
            })
        })

        return isTenantEdited
    }

    remove (id){
        let isTenantRemoved

        getDatabase().then((bucket) => {
            bucket.remove(id, (err, res) => {
                if(err){
                    return
                } else {
                    isTenantRemoved = true
                    return
                }
            })
        })

        return isTenantRemoved
    }

    setHouse(house){
        this.house = house
    }
}

module.exports = Tenant