import React from 'react';
import { Image } from 'react-native';
import { Container, Title } from './styles';
import logoImg from '../../assets/logo.png';

import Input from '../../components/input';
import Button from '../../components/button';


const SignIn: React.FC = () => {
  return (<Container >
    <Image source={logoImg} />
    <Title>Faça seu login</Title>
    <Input name="mail" icon="mail" placeholder="E-mail"/>
    <Input name="password" icon="lock" placeholder="Senha"/>
    <Button onPress={() => { console.log('ops') }}>Entrar</Button>
  </Container>);
}

export default SignIn;
