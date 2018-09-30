import React, { Component } from 'react';
import LeftSide from './components/left-sidebar';
import RightSide from './components/right-sidebar';
import Main from './components/main';
import { withRouter } from 'react-router-dom'
import './App.css';

class App extends Component {
  state = {
    user: {}
  };

  setUser = (userData) => {
    this.setState({
      user: userData
    })
  };

  componentDidMount() {
    let id = localStorage.getItem("userID")
    if (id){
      fetch(`http://localhost:3000/users/${id}`)
      .then(res => res.json())
      .then(user => this.setState({ user: user }))
    }
  }

  logout = () => {
    localStorage.removeItem("usserID")
    this.setState({user: {}}, () => this.props.history.push("/login"))
  }


  render() {
    return (
      <div className="App app-wrapper">
        <LeftSide user={this.state.user} logout={this.logout} />
        <Main user={this.state.user} setUser={this.setUser}/>
        <RightSide />
      </div>
    );
  }
}

export default withRouter(App);
