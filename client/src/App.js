import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import LandlordHome from './components/landlord/'
import LandlordSignin from './components/landlord/signin.js'
import LandlordRegister from './components/landlord/register.js'
import TenantHome from './components/tenant/'
import TenantSignin from './components/tenant/signin.js'
import TenantRegister from './components/tenant/register'
import NotFound from './components/NotFound'

function App () {

    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tenant" exact component={TenantHome} />
          <Route path="/landlord" exact component={LandlordHome} />
          <Route path="/landlord/property/:id" exact component={LandlordHome} />
          <Route path="/login/landlord" exact component={LandlordSignin} />
          <Route path="/login/tenant" exact component={TenantSignin} />
          <Route path="/register/landlord" exact component={LandlordRegister} />
          <Route path="/register/tenant" exact component={TenantRegister} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </Router>
    );
}
export default App;
