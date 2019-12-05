
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Property from '../landlord/property';

function TenantHome () {

    return (
      <div>
        <header>test insider props</header>
        <Router>
          <Switch>
            <Route path="/" component={Property} />
          </Switch>
        </Router>
      </div>
    );
}
export default TenantHome;
