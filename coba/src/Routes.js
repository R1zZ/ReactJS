import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from './containers/Header';
import Home from "./App";

export default () =>
<Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Header" exact component={Header} />
</Switch>