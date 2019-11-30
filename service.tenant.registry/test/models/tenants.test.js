var mockCouch = require('mock-couch');

var Tenant = require('../../src/models/Tenant');


describe('Tenants', function() {
    var couchdb = null

  beforeEach(function() {
    couchdb = mockCouch.createServer();

    couchdb.listen(5984);

    couchdb.addDB('tenants', [ { name : 'one name', lastname : 'one lastname' }, { _id : '4568797890', name : 'second name', lastname : 'other lastname' } ]);
  });


//   it('must add a tenant to database', function(done) {

//     couchdb.on('POST', function(data) {
//       expect(data.doc.name).toBe('reimu');
//       expect(data.doc.lastname).toBe('hakurei');
//       done();
//     });

//     new Tenant().create({ name : 'reimu', lastname : 'hakurei' });

//   });

    // afterAll(function(){
    //     couchdb.close()
    // })
});