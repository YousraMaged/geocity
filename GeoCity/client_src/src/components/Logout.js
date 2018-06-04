import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
 
class Logout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
          };
        this.Logout = this.Logout.bind(this);
    }

    render() {
        return (
        <Button onClick={this.Logout}>Logout</Button>
        )
    }

Logout() {
    const token = window.localStorage.getItem('AcessToken');
    axios.post(`http://localhost:3000/api/Users/logout?access_token=${token}`)
    .then(res => {
        console.log(this.state.isLoggedIn);
        console.log(res);
        localStorage.clear();
        this.setState({ isLoggedIn : false });
    }).catch(err => {
        console.log(err);
    });
}
}
export default Logout;