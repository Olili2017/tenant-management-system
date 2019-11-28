// const couchbase = require('couchbase');

const Couchbase = require('couchbase');

class Database {

    constructor(options){
        this.options = {}
        if (options){
            this.options.username = options.username ? options.username : "pidscrypt"
            this.options.password = options.password ? options.password : "Pidscrypt123567"
            this.options.host = options.host ? options.host : "localhost"
        }else {
            this.options = {
                username : "pidscrypt",
                password : "Pidscrypt123567",
                host : "localhost"
            }
        }
    }

    bucket (backetName){
        console.log("Connecting to database ...");

        var cluster = new Couchbase.Cluster(`couchbase://${this.options.host}/`);
        cluster.authenticate(this.options.username, this.options.password);
        return cluster.openBucket(backetName);
    }
}

module.exports = Database;