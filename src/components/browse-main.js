import React, { Component, Fragment } from 'react';

class BrowseMain extends Component {
  state = {
  };



  render() {
    return (
        <Fragment>
          <div>
              welcome, {this.props.user.username}
          </div>
          <div>
              visualization
          </div>
          <div className="browse-wrapper">
              <div>box 1</div>
              <div>box 2</div>
              <div>box 3</div>
              <div>box 4</div>
              <div>box 5</div>
              <div>box 6</div>
              <div>box 7</div>
              <div>box 8</div>
          </div>
        </Fragment>
    );
  }
}

export default BrowseMain;