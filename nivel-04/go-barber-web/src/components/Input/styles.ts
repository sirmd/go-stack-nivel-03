import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}


export const Container = styled.div<ContainerProps>`

  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  border: 2px solid;
  ${props => props.isFocused ? `color: #ff9000` : `color: #666360`};
  ${props => props.isFilled && `color: #ff9000`};
  ${props => props.isFocused ? `border-color: #ff9000` : `border-color: #232129`};

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #F4EDE8;



    &::placeholder {
      color: #666360;
    }

  }

  svg {
    margin-right: 16px;
  }
`;
