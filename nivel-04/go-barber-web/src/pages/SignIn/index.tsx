import React from 'react';
import { Container, Content, Background } from './styles';
import { FiLogIn } from 'react-icons/fi';
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

          <input placeholder="E-mail" />
          <input type="password" placeholder="Senha" />

          <button type="submit">Entrar</button>

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
