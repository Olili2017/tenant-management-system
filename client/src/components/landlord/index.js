import React, { useRef, useState } from 'react';
import TopBar from '../utils/TopBar.js'

import './css/landlord.css'
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUserCog, faHome, faSignOutAlt, faWarehouse, faUsers, faPlus } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useAuth } from '../utils/auth'
import Properties from './properties.js';
import Property from './property.js';
import NotificationPanel from '../utils/NotifictionPanel.js';
function LandlordHome () {

  let windowHeight = window.innerHeight;
  const menuLeft = useRef()
  const [expanded, expand] = useState(false)
  const { setAuthTokens } = useAuth();

  const toggleMenu = () => {
    expand(!expanded)
    if (!expanded){
      menuLeft.current.style.width = '200px'
    }else {
      menuLeft.current.style.width = '60px'
    }
  }

  const logOut = function(){
    setAuthTokens()
  }

    return (
      <div style={{width: '100%', height: windowHeight }}>
        <TopBar />
        <Row className="window-main" >
          <div ref={menuLeft} className="menu-col">
            <button onClick={toggleMenu}><FontAwesomeIcon icon={faBars} /></button>
            <button className="active"><FontAwesomeIcon icon={faHome} /></button>
            <button><FontAwesomeIcon icon={faWarehouse} /></button>
            <button><FontAwesomeIcon icon={faUsers} /></button>
            <button><FontAwesomeIcon icon={faPlus} /></button>
            <button><FontAwesomeIcon icon={faUserCog} /></button>
            <button onClick={logOut}><FontAwesomeIcon icon={faSignOutAlt} /></button>
          </div>
          <Col lg={8} className="properties-container" >

            <Router>
              <Switch>
                <Route path="/landlord" exact component={Properties} />
                <Route path="/landlord/property/:id" exact component={Property} />
              </Switch>
            </Router>
          </Col>
          <Col lg={2}>
            <NotificationPanel />
          </Col>
          <Col lg={2} >
            <div className="ad-space">

            </div>
          </Col>
        </Row>
      </div>
    );
}
export default LandlordHome;
