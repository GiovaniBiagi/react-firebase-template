import React from 'react';
import Main from './layouts/Main';
import { PrivateRoute } from './components';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import ResetPassword from './views/ResetPassword/ResetPassword';
import { Route, Switch } from "react-router-dom";

const App = () => (
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/register" component={Register} />
        <PrivateRoute component={Main} />
    </Switch>
);

export default App;