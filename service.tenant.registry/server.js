const express = require('express');
const axios = require('axios')
var Database = require('./database');
// const Couchbase = require('couchbase')

const app = express();

app.use(express.json());

const clusters = {
  houses : "houses",
  tenants : "tenants"
}

const service = {
  config : { url : "http://localhost:3000" }
}

// log all incoming requests
app.use((req, res, next) => {
    console.log(`${req.method} -- ${JSON.stringify(req.body)}`);
    next();
});

app.listen(8000, () => {
  console.log("listening on port 8000");

});