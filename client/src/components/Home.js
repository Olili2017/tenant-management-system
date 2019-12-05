import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Topmenu from './utils/Topmenu.js'
import './css/home.css'

function Home (props) {

    return (
      <header className="main-header container-fluid">
          <Container>
            <Topmenu />
            <div>
              <p>Login as : </p>
              <ul>
                <li><Link to="/login/tenant" >Tenant</Link></li>
                <li><Link to="/login/landlord" >Landlord</Link></li>
              </ul>
            </div>
          </Container>
        </header>
    );
}
export default Home;
