import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import Tutorial from './containers/Tutorial';
import Helloworld from './containers/Helloworld';
import Crud from './containers/Crud';
import Api from './config/Api';
import PostApi from './config/PostApi'

import NotFound from './containers/NotFound';

export default() =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Crud" exact component={Crud} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Tutorial" exact component={Tutorial} />
        <Route path="/Helloworld" exact component={Helloworld} />
        <Route path="/Api" exact component={Api} />
        <Route path="/PostApi" exact component={PostApi} />
        <Route component={NotFound} />
    </Switch>;