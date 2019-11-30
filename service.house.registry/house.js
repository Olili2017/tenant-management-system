// const Database = require('./database')
const axios = require('axios')
const Database = require('./database')

const service = {
    config : { url : "http://localhost:3000" }
}

class House {

    constructor(){
        this.database = null
    }

    async getDatabase(){
        if (this.database) return this.database
        //get config
        await axios.post(`${service.config.url}/serve/db`,
            {name : "houses"},{
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

    create(house){
        let isHouseCreated = false
        this.getDatabase().then((bucket) => {
            bucket.insert(`${this.landlord}:${Math.ceil(Math.random() * 1000)}`,house, (err,res) => {
                if(err){
                    console.log("error while creating new house");
                    return

                } else {
                    console.log("created new house");
                    isHouseCreated = true
                    return

                }
            })
        })

        return isHouseCreated

    }

    remove (id){
        let isHouseRemoved = false
        this.getDatabase().then((bucket) => {
            bucket.remove(id, (err, res) => {
                if(err){
                    return
                } else {
                    isHouseRemoved = true
                    return
                }
            })
        })

        return isHouseRemoved
    }

    edit (id, newHouse){
        let isHouseRemoved = false
        this.getDatabase().then((bucket) => {
            bucket.replace(id,newHouse,(err, res) => {
                if (err){
                    return
                }else {
                    isHouseRemoved = true
                    return
                }
            })
        })

        return isHouseRemoved
    }

    setLandlord(landlordId){
        this.landlord = landlordId
    }
}

module.exports = House