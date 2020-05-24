import React from 'react';
import Main from './layouts/Main';
import { PrivateRoute } from './components';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import ForgotPassword from './views/ForgotPassword/ForgotPassword';
import { Route, Switch } from "react-router-dom";

const App = () => (
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/register" component={Register} />
        <PrivateRoute component={Main} />
    </Switch>
);

export default App;