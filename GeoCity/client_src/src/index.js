import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
// Components
import Login from './components/login';
import Protected from './components/protected';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
    
    render(){
        return <div>Home</div>
    }

    componentDidMount(){
        console.log(window.localStorage.getItem('AcessToken'));
    }
}

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App}></Route>
            <Route path="/login" component={Login}></Route>
            <PrivateRoute path="/protected" component={Protected}/>
        </div>
    </BrowserRouter>
    ,document.querySelector('#root'));