const express = require('express');
var Database = require('./database');
// const Couchbase = require('couchbase')

const app = express();

app.use(express.json());

const clusters = {
  houses : "houses",
  tenants : "tenants"
}

// log all incoming requests
app.use((req, res, next) => {
    console.log(`${req.method} -- ${JSON.stringify(req.body)}`);
    next();
});

app.get('/', (req,res) => {
  res.send("home here");
})

app.post('/house/create', (req,res) => {

  const {rent} = req.body

  try {
    new Database()
      .bucket(clusters.houses)
      .insert(
        "landlordId:houseId",
        {vailable : true, rent : rent, create_date : new Date().getTime()},
        (err,result) => {
          if(err){
            // if house exists, change house id
            if(err.code === 12){
              
            }
            res.json({message : err.code, data : err})
          }else {
            res.json({message : "200 OK", data : {rent : rent, available : true, create_date : new Date().getTime()}})
          }
        }
      )
  } catch (error) {
      res.json(error)
  }
})

app.get('/rest/test', (req,res) => {
  try {

        new Database().bucket("tenant").get(
          'house001',
          (err,result) => {
            if (err) {
              console.trace('Error: %s', err.message);

            }else {
              console.log('output : %j', result.value);
              let  tenants = result.value.tenants;
              tenants.push({"name" : "latest addition", "start" : "06"});
              new Database().bucket("tenant").replace('house001',tenants, (err,res) => {
                console.log("done with update");

              })
            }
          }
        );
  } catch (err) {
    console.error("Error: %s", err.message);
  } finally {
    res.send("check docs now");
  }
});


app.listen(8000, () => {
  console.log("listening on port 5000");

});