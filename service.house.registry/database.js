const couchbase = require('couchbase');

class Database {

    constructor(options){
        this.options = options
    }

    bucket (backetName){
        if (!this.options){
            return null
        }
        console.log("Connecting to database ...");

        var cluster = new couchbase.Cluster(`couchbase://${this.options.host}/`);
        cluster.authenticate(this.options.username, this.options.pass);
        return cluster.openBucket(backetName);
    }
}

module.exports = Database