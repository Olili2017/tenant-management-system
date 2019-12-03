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

        await new Promise((resolve, reject) => {
            this.bucket().insert(id,document, function(err, result){
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

        let output = null

        await new Promise((resolve,reject) => {
            this.bucket().get(id, function (err,result){
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
        let output = null
        await new Promise((resolve, reject) => {
            this.bucket().remove(id, (err, res) => {
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

}

const database = new Database({host : 'localhost', username: 'pidscrypt', pass : 'Pidscrypt123567', bucket : 'properties'})

module.exports = Database