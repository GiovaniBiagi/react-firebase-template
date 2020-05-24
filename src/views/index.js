import React from "react";
import Dashboard from './Dashboard/Dashboard';
import Home from './Home/Home';
import { Route, Switch } from "react-router-dom";

const Routes = () => (
    <Switch>
        <Route path="/home" exact component={Home}/>
        <Route path="/dashboard" exact component={Dashboard}/>
    </Switch>
);

export default Routes;