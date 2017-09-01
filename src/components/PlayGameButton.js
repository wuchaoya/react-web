import styled from 'styled-components';

import colorStyle from '../styles/colorStyle';

export default styled.div`
  display: inline-block;
  width: ${(props) => props.width}rem;
  height ${(props) => props.height}rem;
  border-radius: ${(props) => props.height / 2}rem;
  background: ${colorStyle.buttonColor};
  line-height: ${(props) => props.height}rem;
  margin-right: ${(props) => props.right}rem;
  text-align: center;
  color: ${colorStyle.buttonTextColor};
  font-size: 0.28rem;
  `;
