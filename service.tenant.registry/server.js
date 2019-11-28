const express = require('express');
var Tenant = require('./src/models/Tenant')

const app = express();

const houseId = "house001"

app.use(express.json());

// log all incoming requests
app.use((req, res, next) => {
    console.log(`${req.method} -- ${JSON.stringify(req.body)}`);
    next();
});

// app.get('/tenants/:landlord')

app.post('/tenant/create', (req, response) => {

  const {name,age,pay_day} = req.body

  tenantAttr = {name: name, age : age, pay_day : pay_day, create_date : new Date().getTime()}
  let tenant = new Tenant()

  tenant.setHouse(req.body.house_id)
  if(tenant.create()){
    response.status(201).json({ message : "Tenant created successfully!", data : req.body})
  } else {
    response.status(500).json({message : "Internal server error!", data : []})
  }
})

app.put('/tenant/:id', (req, res) => {
  let tenant = new Tenant()
    if(tenant.edit(`${houseId}:${req.params.id}`,req.body)){
        res.status(204).json({message : "Action completed.", data : req.body})
    } else {
        res.status(500).json({message : "Internal server error"})
    }
})

app.patch('/tenant/:id', (req, res) => {
  let tenant = new Tenant()
    if(tenant.remove(`${houseId}:${req.params.id}`)){
        res.status(204).json({message : "Action completed."})
    } else {
        res.status(500).json({message : "Internal server error"})
    }
})

app.listen(8000, () => {
  console.log("listening on port 8000");

});