import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => (
    loggedIn ?
    <Route {...rest} render={props => {
        return (
            <Component {...props} />
    )}} /> : <Redirect to={{ pathname: '/'}} />
);

const mapStateToProps = (state) => ({
    loggedIn: state.login.loggedIn
});
export default connect(mapStateToProps)(PrivateRoute)