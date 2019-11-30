const axios = require('axios')
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

        this.getDatabase().then((bucket) => {
            // console.log("connected to bucket %j", bucket);

            bucket.insert(`${this.house}:${Math.ceil(Math.random() * 1000)}`,tenant,(err,res) => {
                if (err){
                    return
                } else {
                    console.log("got result");

                    isTenantCreated = res
                    return
                }
            })
        })

        return isTenantCreated
    }

    edit (id, editedTenant){
        let isTenantEdited

        this.getDatabase().then((bucket) => {
            bucket.replace(id,editedTenant,(err,res) => {
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

        this.getDatabase().then((bucket) => {
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