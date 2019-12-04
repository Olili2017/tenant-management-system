const couchbase = require('couchbase')

class Database {

    bucket (){

        if (!this.host || !this.username || !this.pass || !this.bucketName){
            return false
        }

        var cluster = new couchbase.Cluster(`couchbase://${this.host}/`);
        cluster.authenticate(this.username, this.pass);
        return cluster.openBucket(this.bucketName);
    }

    async insert (id, document){

        let output = null
        let bucket = this.bucket()

        await new Promise((resolve, reject) => {

            bucket.insert(id,document, function(err, result){

                if (err){
                    let message = null
                    if (err.code == 12) {
                        message = {message : "Document ID already exists in database"}
                    }else {
                        message = {message : err.message}
                    }

                    reject(message)
                }

                if (result){

                    bucket.get(id, (err, newDoc) => {
                        resolve(newDoc)
                    })

                }
            })
        }).then(res => {
            output = res
        }).catch(err => {
            output = err
        })

        return output

    }

    async get (id){


        let output = null

        var couchbase = this.bucket()

        await new Promise((resolve,reject) => {
            couchbase.get(id, function (err,result){
                if (err){
                    reject({message : err.message})
                }
                if (result){
                    resolve(result.value)
                }
            })
        }).then(result => {
            output = result
        }).catch(err => {
            output = err
        })

        return output
    }

    async remove (id){
        let output = null, bucket = this.bucket()
        await new Promise((resolve, reject) => {
            bucket.remove(id, (err, res) => {
                if (err){
                    output = err
                    reject({message : err.message})
                }

                if (res){
                    output = res
                    resolve(res)
                }
            })
        }).then(res => { output = res})
            .catch(err => {output = err})

        return output
    }

    // merge and replace old values. add value if not exists
    mergeObjects (current, edited){

        var newObj = {}
        try {
            for (var attrname in current) {
                typeof newObj[attrname] === 'object' ?
                newObj[attrname].push(current[attrname]):
                newObj[attrname] = current[attrname]
            }
            for (var attrname in edited) {
                typeof newObj[attrname] === 'object' ?
                newObj[attrname].push(edited[attrname]) :
                newObj[attrname] = edited[attrname] }
        }catch (ex) {
            newObj = {}

            for (var attrname in current) {
                newObj[attrname] = current[attrname]
            }
            for (var attrname in edited) {
                newObj[attrname] = edited[attrname] }
        }

        return newObj
    }

    async replace(id, currentData, newData){
        let output = null
        let replacement = this.mergeObjects(currentData, newData)
        let bucket = this.bucket()

        await new Promise(function(resolve, reject){

            bucket.replace(id,replacement,(err, editedObj) => {
                if (err){
                    reject(err.message)
                }

                if (editedObj){
                    resolve({...editedObj, ...replacement})
                }
            })
        }).then(newObj => {
            output = newObj
        }).catch(err => { output = err})

        return output
    }

    // start properties

    setHost(host) {
        this.host = host
    }

    setUser(username){
        this.username = username
    }

    setPass(pass){
        this.pass = pass
    }

    setBucketName(bucketName){
        this.bucketName = bucketName
    }

    // stop properties

}

const database = new Database()

exports = module.exports = database