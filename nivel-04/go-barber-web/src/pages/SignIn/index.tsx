import React from 'react';
import { Container, Content, Background } from './styles';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';
import logo from '../../assets/logo.svg'
const SignIn = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />
        <form >
          <h1>
            Faça seu Logon
          </h1>

          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input icon={FiLock} name="password" type="password" placeholder="Senha" />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container >
  );
}

export default SignIn;
