import React, { Component } from 'react';
import LoginForm from './login-form';
import Logout from './Logout';


class Login extends Component {
  render() {
    return (
      <div>
        <LoginForm />
        <Logout />
      </div>
    );
  }
}

export default Login;