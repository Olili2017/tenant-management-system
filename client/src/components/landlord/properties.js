import React from 'react'
import { Container, Row, Col, Image, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'
function Properties (){


    const properties = [
        {
          "id": Math.ceil(Math.random() * 999999).toString(),
          "landlord": "68768475",
          "name": "kato estates",
          "description": "another test desc is here and should be about 100 characters at most",
          "location": "mawanda road",
          "address": {

          },
          "helpline": "0772654598",
          "email": "property@gmail.com",
          "rating": 5.0,
          "created": new Date().getTime()
        },
        {
          "id": Math.ceil(Math.random() * 999999).toString(),
          "landlord": "68768475",
          "name": "kamwokya",
          "description": "Some test desc is here and should be about 100 characters at most",
          "location": "acacia ave",
          "address": {

          },
          "helpline": "0772654598",
          "email": "property1@gmail.com",
          "rating": 4.0,
          "created": new Date().getTime()
        },
        {
          "id": Math.ceil(Math.random() * 999999).toString(),
          "landlord": "68768475",
          "name": "kamwokya",
          "description": "Some test desc is here and should be about 100 characters at most",
          "location": "acacia ave",
          "address": {

          },
          "helpline": "0772654598",
          "email": "property1@gmail.com",
          "rating": 4.0,
          "created": new Date().getTime()
        },
        {
          "id": Math.ceil(Math.random() * 999999).toString(),
          "landlord": "68768475",
          "name": "kamwokya",
          "description": "Some test desc is here and should be about 100 characters at most",
          "location": "acacia ave",
          "address": {

          },
          "helpline": "0772654598",
          "email": "property1@gmail.com",
          "rating": 4.0,
          "created": new Date().getTime()
        }
      ]

      const goto = (e) => {
        // console.log("key is ",e.target)
      }

    return(
        <CardGroup>
          <header style={{textTransform: 'uppercase', color: '#919191', fontWeight: '600' }}>My properties</header>
            {
            properties.map((property, index) => {
                return (
                <Container key={property.id} className="property-container" onClick={goto}>
                    <Link to={`/landlord/property/${property.id}`} >
                        <Row>
                            <Col className="property-image-container" lg={4}>
                            <Image src="" className="property-image" />
                            </Col>
                            <Col className="property-details-container" lg={8}>
                            <Row className="property-details-header">{property.name} - {property.location}</Row>
                            <Row className="property-details-body" >{property.description}</Row>
                            <Row className="property-details-footer" >
                                <Col>Rating: XXXX {property.rating}</Col>
                                <Col></Col>
                                <Col>E-mail : {property.email}</Col>
                            </Row>
                            </Col>
                        </Row>
                    </Link>
                </Container>)

            })
            }
        </CardGroup>
    )
}

export default Properties