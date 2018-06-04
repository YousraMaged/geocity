import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Form, Checkbox, Button, Col } from 'react-bootstrap';
import axios from 'axios';

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    axios.post(`http://localhost:3000/api/Users/login`, {
      email: this.state.email,
      password: this.state.password
    }).then(res => {
      console.log(res);
      window.localStorage.setItem('AcessToken', res.data.id);
      console.log(window.localStorage.getItem('AcessToken'));
    }).catch(err => {
      console.log(err);
    });
  }

  createMarkup() { 
    return { __html: `
        <div>
            Test Page
        </div>
    ` }; 
};

  render() {
    return (
      <div>
      <Form horizontal onSubmit={this.handleSubmit}>
      <br/>
      <br/>
      <FormGroup controlId="email">
        <Col componentClass={ControlLabel} md={4}>
          Email
        </Col>
        <Col md={4}>
          <FormControl type="email" placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange} />
        </Col>
      </FormGroup>

      <FormGroup controlId="password">
        <Col componentClass={ControlLabel} md={4}>
          Password
        </Col>
        <Col md={4}>
          <FormControl type="password" placeholder="Password" value={this.state.password}
            onChange={this.handleChange} />
        </Col>
      </FormGroup>
    
      <FormGroup>
        <Col mdOffset={4} md={4}>
          <Checkbox>Remember me</Checkbox>
        </Col>
      </FormGroup>
    
      <FormGroup>
        <Col mdOffset={7}>
          <Button bsStyle="primary" type="submit">Sign in</Button>
        </Col>
      </FormGroup>
    </Form>
    <div dangerouslySetInnerHTML={this.createMarkup()} />
    </div>
    );
  }
}

export default NameForm;