import React, { Component } from 'react';
import BrowseMain from './browse-main';
import Login from './login';
import Register from './register';
import { Route } from 'react-router-dom';

class Main extends Component {
  state = {
  };



  render() {
    return (
      <div className="content content-wrapper">
        <Route exact path="/" render={(routerProps) => <BrowseMain {...routerProps} user={this.props.user}/> } />
        <Route path="/login" render={(routerProps) => <Login {...routerProps} setUser={this.props.setUser}/>} />
        <Route path="/register" render={(routerProps) => <Register {...routerProps}/>} />
      </div>
    );
  }
}

export default Main;