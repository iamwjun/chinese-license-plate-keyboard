import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddLicense from './page/AddLicense';

class Routing extends Component {
    render() {
        return (          
            <Router>
                <Switch>
                    <Route exact path='/' component={AddLicense} />
                </Switch>
            </Router>
        );
    }
}
export default Routing;