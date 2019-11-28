const couchbase = require('couchbase');
const express = require('express');

const app = express();

app.use(express.json());

// log all incoming requests
app.use((req, res, next) => {
    console.log(`${req.method} -- ${JSON.stringify(req.body)}`);
    next();
});

app.listen(8000, () => {
    console.log("listening on port 8000");
    
});

// const cluster = new couchbase.Cluster('couchbase://localhost/');
// cluster.authenticate('pidscrypt', 'Pidscrypt123567');
// var bucket = cluster.openBucket('testbase');
// var N1qlQuery = couchbase.N1qlQuery;

// bucket.manager().createPrimaryIndex(function() {
//   bucket.upsert('user:king_arthur', {
//     'email': 'kingarthur@couchbase.com', 'interests': ['Holy Grail', 'African Swallows']
//   },
//   function (err, result) {
//     bucket.get('user:king_arthur', function (err, result) {
//       console.log('Got result: %j', result.value);
//       bucket.query(
//       N1qlQuery.fromString('SELECT * FROM bucketname WHERE $1 in interests LIMIT 1'),
//       ['African Swallows'],
//       function (err, rows) {
//         console.log("Got rows: %j", rows);
//       });
//     });
//   });
// });