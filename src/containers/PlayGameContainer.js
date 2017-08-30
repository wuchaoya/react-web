import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import PureComponent from '../components/PureComponent';
import Icon from '../components/playGameIcon';
import PlayGameItem from '../components/PlayGameItem';
import PlayGameButton from '../components/PlayGameButton';
import Title from '../components/TitleComponent';
import Text from '../components/TextComponent';
import PlayGameText from '../components/PlayGameText';

class PlayGameContainer extends PureComponent {
  static PropTypes = {
    activeFilter: PropTypes.string.isRequired
  }
  render () {
    return (
      <div className='App'>
        <PlayGameItem width={7.4} height={1.4}>
          <Icon size={1.2} top={0.1} left={0.1} src='http://pic23.photophoto.cn/20120530/0020033092420808_b.jpg' />
          <PlayGameText>
            <Title>斗地主</Title>
            <Text>斗地主可是非常好玩的</Text>
          </PlayGameText>
          <PlayGameButton width={2.2} height={0.7} right={0.2}>开始游戏</PlayGameButton>
        </PlayGameItem>
      </div>
    );
  }
}

const stateToProps = state => ({ ...state });

export default connect(stateToProps)(PlayGameContainer);
