import React, { Component } from 'react';

class CloudPlayContainer extends Component {
  render () {
    return (
      <div>
        {this.props.match.params.id}
      </div>
    );
  }
}

export default CloudPlayContainer;
