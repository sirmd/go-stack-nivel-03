import styled from 'styled-components';
import Tooltip from '../Tooltip/index';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #666360;
  border: 2px solid #232129;

  ${props => props.isFocused && `color: #ff9000`};
  ${props => props.isFilled && `color: #ff9000`};
  ${props => props.hasError && `border-color: #c53030`};
  ${props => props.isFocused && `border-color: #ff9000`};

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  /* Irá sobreescrever a cor do span da Tooltip */
  span {
    background: #c53030;
    color: #fff;

    &:before {
      border-color: #c53030 transparent;
    }
  }

  svg {
    margin: 0;

    &:hover {
    }
  }
`;
