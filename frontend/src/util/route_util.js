import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

<<<<<<< HEAD
const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.session.isAuthenticated)
});

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={props =>
        !loggedIn ? <Component {...props} /> : <Redirect to="/main" />
    }
    />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={props =>
        loggedIn ? <Component {...props} /> : <Redirect to="/" />
    } />
);


export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
=======
// Passed in from parent component or from mapStateToProps
const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
                // Redirect to the tweets page if the user is authenticated
                <Redirect to="/tweets" />
            )
    )} />
);

const Protected = ({ component: Component, loggedIn, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            loggedIn ? (
                <Component {...props} />
            ) : (
                    // Redirect to the login page if the user is already authenticated
                    <Redirect to="/login" />
                )
        }
    />
);

// Use the isAuthenitcated slice of state to determine whether a user is logged in

const mapStateToProps = state => (
    { loggedIn: state.session.isAuthenticated }
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

>>>>>>> 2bb3026ef9b1015574d3c1361b0136c7c90b1e55
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));