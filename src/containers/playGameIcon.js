import styled from 'styled-components';

export default styled.img`
  width: ${(props) => props.size}em;
  height: ${(props) => props.size}em;
  border-radius: ${(props) => props.size / 2}em;
  margin: ${(props) => props.margin};
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  `;
