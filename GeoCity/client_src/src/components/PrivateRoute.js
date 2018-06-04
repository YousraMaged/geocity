import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const checkAuth = () => {
  const token = window.localStorage.getItem('AcessToken');
  if (!token) {
      return false;
  } 
  return true;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        checkAuth() === true 
        ? <Component {...props} />
        : <Redirect to={{pathname: "/login", state: { from: props.location } }}/>
      }
    />
  );

  export default PrivateRoute;