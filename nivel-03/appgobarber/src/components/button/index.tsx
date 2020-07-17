import React from 'react';
import { Container, ButtonText } from './styles';
import { RectButtonProperties } from 'react-native-gesture-handler';

// Interface torna o children como um campo obrigatório do Button
// e define que ele será uma string, por padrão, o children pode ser
// qualquer coisa.
// A interface pode ser utilizada para passar outros parãmetros também.
interface ButtonProps extends RectButtonProperties {
  children: string;
}

// Utiliza interface para o Button
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  // Rest são todas as outras propriedades do button que serão passadas
  // ao Container, Se passar um onPress ao Button, ele virá no rest e passará
  // ao Container que é o RectButton
  return <Container {...rest}>
    <ButtonText>{children}</ButtonText>
  </Container>;
}

export default Button;
