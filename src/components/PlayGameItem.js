import styled from 'styled-components';

export default styled.div`
  height: ${(props) => props.height}em;
  width: ${(props) => props.width}em;
  border-radius: ${(props) => props.radius}em;
  background: ${props => props.backgroundColor};
  `;
