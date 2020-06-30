// This is a route only for authenticated user
// if not -> redirect to login page
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
    // Add your own authentication on the below line.
    const isLoggedIn = localStorage?.customerToken ? true: false
    return (
        <Route
            {...rest}
            render={props =>
                isLoggedIn ? (
                <Component {...props} />
                ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                )
            }
        />
    )
}

export default PrivateRoute