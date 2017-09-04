import styled from 'styled-components';

import colorStyle from '../styles/colorStyle';

export default styled.p`
  font-size: ${(props) => props.fontSize}rem;
  line-height: ${(props) => props.lineHeight}rem;
  color: ${(props) => props.color ? colorStyle.textColor : props.color};
  margin: 0;
  padding: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) => props.lineClamp};
  overflow: hidden;
  `;
