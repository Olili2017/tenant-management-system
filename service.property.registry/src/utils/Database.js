const couchbase = require('couchbase')

class Database {

    constructor(options){
        this.options = options
    }

    bucket (){
        if (!this.options){
            return null
        }

        const {host, username, pass, bucket} = this.options

        if (!host || !username || !pass || !bucket){
            return false
        }

        var cluster = new couchbase.Cluster(`couchbase://${this.options.host}/`);
        cluster.authenticate(this.options.username, this.options.pass);
        return cluster.openBucket(bucket);
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

                    resolve(result)
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

        let output = null, bucket = this.bucket()

        await new Promise((resolve,reject) => {
            bucket.get(id, function (err,result){
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
        for (var attrname in current) { newObj[attrname] = current[attrname] }
        for (var attrname in edited) { newObj[attrname] = edited[attrname] }

        return newObj
    }

    async replace(id, currentData, newData){
        let output = null
        let replacement = this.mergeObjects(currentData, newData)
        let bucket = this.bucket()

        await new Promise(function(resolve, reject){

            bucket.replace(id,replacement,(err, editedObj) => {
                if (err){
                    console.log(err);

                    reject(err.message)
                }

                if (editedObj){
                    console.log(editedObj);

                    resolve({...editedObj, ...replacement})
                }
            })
        }).then(newObj => {
            output = newObj
        }).catch(err => { output = err})

        return output
    }

}

const database = new Database({host : 'localhost', username: 'pidscrypt', pass : 'Pidscrypt123567', bucket : 'properties'})

module.exports = database