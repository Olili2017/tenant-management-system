# Tentant registry service

> This service is built in node and handles all database interaction to do with tenant data


**Add tanant**

`POST service.tenant.registry/tenant/create`

**Response**

`200 OK` on success

`402 NO RESPONSE` if no server response

```JSON
    {
        "identifier" : "house001",
        "name" : "kiwanuka",
        "contact" : "0775456523",
        "email" : "kiwanuka@example.com",
        "pay_date"  : "04", //day of month
        "regdate" : "01-01-2019",
        "state" : {
            "status" : "due", // acrued
            "amount" : 0
        }
    }
```

**Get tanant**

`GET service.tenant.registry/tenant/<identifier>`

**Response**

`200 OK` on success

`404 NOT FOUND` if tenant does not exist

```JSON
    {
        "identifier" : "house001",
        "name" : "kiwanuka",
        "contact" : "0775456523",
        "email" : "kiwanuka@example.com",
        "pay_date"  : "04", //day of month
        "regdate" : "01-01-2019",
        "state" : {
            "status" : "due", // acrued
            "amount" : 2000000
        }
    }
```


**Get tanant**

`GET service.tenant.registry/tenant/all`

**Response**

`200 OK` on success

```JSON
    [
        {
        "identifier" : "house001",
        "name" : "kiwanuka",
        "contact" : "0775456523",
        "email" : "kiwanuka@example.com",
        "pay_date"  : "04",
        "regdate" : "01-01-2019",
        "state" : {
            "status" : "due",
            "amount" : 2000000
        }
    },
    {
        "identifier" : "house002",
        "name" : "alex munga",
        "contact" : "0707452309",
        "email" : "munga@example.com",
        "pay_date"  : "01",
        "regdate" : "01-01-2019",
        "state" : {
            "status" : "acryed",
            "amount" : 0
        }
    }
    ]
```