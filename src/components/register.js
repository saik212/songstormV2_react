import React, { Component } from 'react';

class Register extends Component {
  state = {
    username: '',
    password: '',
    email: ''
  };


  // sets state via event change
  // re-renders component on each change of input
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'accepts': 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then((res) => {
      return res.json();
    })
    .then((user) => {
      if (user.error) {
        alert(user.error)
      } else {
        localStorage.setItem("userID", user.id)
        this.props.setUser(user)
        this.props.history.push("/")
      }
    });
  }

  render() {
    return (
      <div className="Register">
        <h1>Register</h1>
        <form>
          <input value={this.state.username} name="username" placeholder="username" onChange={this.handleChange.bind(this)}/>
          <input value={this.state.username} name="username" placeholder="username" onChange={this.handleChange.bind(this)}/>
          <input value={this.state.password} name="password" placeholder="password" type="password" onChange={this.handleChange.bind(this)}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Register;
