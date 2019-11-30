const assert = require('chai').assert
const config = require('./config.json')

describe('get configurations', function () {
    it("should return config",function () {
        assert.isNotEmpty(config.database.houses)
    })
})