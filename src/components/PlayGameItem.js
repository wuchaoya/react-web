import styled from 'styled-components';
import colorStyle from '../styles/colorStyle';
export default styled.div`
  height: ${(props) => props.height}rem;
  width: ${(props) => props.width}rem;
  border-radius: ${(props) => props.height / 2}rem;
  background: ${colorStyle.itemBackgroundColor};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  `;
