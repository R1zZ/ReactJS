import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import Tutorial from './containers/Tutorial';
import Helloworld from './containers/Helloworld';

import NotFound from './containers/NotFound';

export default() =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Tutorial" exact component={Tutorial} />
        <Route path="/Helloworld" exact component={Helloworld} />
        <Route component={NotFound} />
    </Switch>;