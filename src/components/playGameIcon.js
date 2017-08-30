import styled from 'styled-components';

export default styled.img`
  width: ${(props) => props.size}rem;
  height: ${(props) => props.size}rem;
  border-radius: ${(props) => props.size / 2}rem;
  margin: ${(props) => props.margin};
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  `;
