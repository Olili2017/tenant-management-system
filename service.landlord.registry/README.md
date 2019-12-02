## Landlord registry - tenant management system

> service to handle everything to do with landlords in the system

### Add landlord

Creates new landlord

***Route***

`POST - /landlord/create`

***Response***

`200 OK` -  If success

`422 Un-processable entity` - If anything is wrong with request body

```JSON
{
    "message" : "200 OK",
    "data" : {
        "id" : 001,
        "name" : "landlord name",
        "age" : 78,
        "username" : "user001",
        "email" : "john@example.com",
        "phone" : "3864868473",
        "rating" : 5.0,
        "sex" : "F",
        "properties" : [ "3FH84" ],
        "next_of_kin" : { "name" : "example name", "contact" : "357657722"},
        "date_created" : "34675765274"
    }
}
```

### Edit landlord

Changes parts of landlord landlord

***Route***

`PUT - /landlord/:id`

***Response***

`200 OK` -  If success

```JSON
{
    "id" : 001,
    "name" : "landlord name edited",
    "age" : 78,
    "username" : "user001",
    "email" : "john@example.com",
    "phone" : "3864868473",
    "rating" : 5.0,
    "sex" : "F",
    "properties" : [ "3FH84" ],
    "next_of_kin" : { "name" : "example name", "contact" : "357657722"},
    "date_created" : "34675765274"
}
```

### Remove landlord

Deletes landlord from system

***Route***

`PATCH - /landlord/:id`

***Response***

`200 OK` -  If success

```JSON
{
    "message" : "Landord was removed successfully"
}
```

### Get landlord(s)

Gets all data about a given landlord

***Routes***

`GET - /landlord/:id` - { }

`GET - /landlord/:name` - [ ]

`GET - /landlord/:sex` - [ ]

`GET - /landlord/:username` - [ ]

`GET - /landlord/:phone` - [ ]

`GET - /landlord/rating/above/:rating` - [ ]

`GET - /landlord/rating/below/:rating` - [ ]

`GET - /landlord/:sex` - [ ]

***Response***

`200 OK` - On success

`404 NOT FOUND` - If requested landlord does not exist

```JSON
{
    "id" : 001,
    "name" : "landlord name",
    "age" : 78,
    "username" : "user001",
    "email" : "john@example.com",
    "phone" : "3864868473",
    "rating" : 5.0,
    "sex" : "F",
    "properties" : [ "3FH84" ],
    "next_of_kin" : { "name" : "example name", "contact" : "357657722"},
    "date_created" : "34675765274"
}
```