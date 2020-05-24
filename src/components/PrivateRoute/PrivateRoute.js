import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { Redirect } from 'react-router-dom';

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

    return <Component {...rest}/>;
}

export default PrivateRoute;