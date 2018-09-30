import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class LeftSidebar extends Component {
  state = {
  };


  render() {
    return (
      <div className="sidebar-lt side-lt-wrapper">
        <div>box 1</div>
				<div>
          {(!this.props.user.username) ? 
          <Link to='/login'>Log In</Link>
          :
          <a href="#" onClick={this.props.logout}>Logout</a>
        }
        </div>
				<div>box 3</div>
			</div>
    );
  }
}

export default LeftSidebar;