import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import PureComponent from '../components/PureComponent';
import Icon from './playGameIcon';

class PlayGameContainer extends PureComponent {
  static PropTypes = {
    activeFilter: PropTypes.string.isRequired
  }
  render () {
    return (
      <div className='App'>
        <Icon size={2} margin={1} primary />
      </div>
    );
  }
}

const stateToProps = state => ({ ...state });

export default connect(stateToProps)(PlayGameContainer);
