import React, { Component } from 'react';

class CloudPlayContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <div >
        {this.props.match.params.id}
      </div>
    );
  }
}

export default CloudPlayContainer;
