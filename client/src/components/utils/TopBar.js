import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

import './css/topbar.css'

function TopBar (){

    return(
        <header className="header" >
        <Row>
          <Col><h4><span>Landlord</span></h4></Col>
          <Col></Col>
          <Col className="text-right header-right">
            <Image src="https://placeholder.com/30" />
          </Col>
        </Row>
      </header>
    )
}

export default TopBar