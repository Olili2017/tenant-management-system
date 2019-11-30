const assert = require('chai').assert
const Database = require('../../src/utils/database')

describe('Database conection', function (){
    it('should return a bucket if exists', function (){

        let bucket = new Database({ username: "pidscrypt", host : "localhost", pass : "Pidscrypt123567"}).bucket("tenants")
        console.log(bucket)
        assert.isObject(bucket)
    })

    it('should return null if no options', function (){
        assert.isNull(new Database().bucket("tenants"))
    })
})