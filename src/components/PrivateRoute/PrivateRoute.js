import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setIsAuthenticated(!!user);
            setIsLoading(false);
        })
    })


    if (isLoading) {
        return (
            <h1>Carregando...</h1>
        )
    }

    if (!isAuthenticated) {
        return (
            <Redirect to='/' />
        )
    }

    return (
        <Route {...rest} render={props => <Component {...props} />} />
    );
}

export default PrivateRoute;