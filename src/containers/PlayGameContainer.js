import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import PureComponent from '../components/PureComponent';
import Icon from '../components/playGameIcon';

class PlayGameContainer extends PureComponent {
  static PropTypes = {
    activeFilter: PropTypes.string.isRequired
  }
  render () {
    return (
      <div className='App'>
        <Icon size={1.2} margin={1} primary src='http://pic23.photophoto.cn/20120530/0020033092420808_b.jpg' />
      </div>
    );
  }
}

const stateToProps = state => ({ ...state });

export default connect(stateToProps)(PlayGameContainer);
