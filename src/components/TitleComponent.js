import styled from 'styled-components';

import colorStyle from '../styles/colorStyle';

export default styled.h3`
  font-size: ${(props) => props.fontSize}rem;
  color: ${(props) => props.color ? colorStyle.titleColor : props.color};
  font-weight: ${(props) => props.fontWeight}; 
  margin: 0;
  padding: 0;
  `;
