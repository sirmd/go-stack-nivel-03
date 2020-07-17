import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  background: #232129;
  flex-direction: row;
  align-items: center;


  /*
  Top/Bottom = 0
  Left/Right = 16px
  */
  padding: 0 16px;
  border-radius: 10px;
  margin-bottom: 8px;
`;

export const InputIcon = styled(Icon)`
  margin-right: 8px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #FFF;
  font-size:  16px;
  font-family: 'Roboto-Regular';
`;
