import React from 'react';
import { Container, TextInput, InputIcon } from './styles';
import { TextInputProps } from 'react-native';

// Da mesma forma como foi feito ao Button, é criada uma interface
// para definir os parâmetros que o Input irá receber.
interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => (
  <Container >
    <InputIcon name={icon} size={20} color = "#666360"/>
    <TextInput
      keyboardAppearance="dark" // muda o tema do teclado
      placeholderTextColor="#666360"
      {...rest} />
  </Container>
);

export default Input;
