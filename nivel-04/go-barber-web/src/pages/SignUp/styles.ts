import styled from 'styled-components';
import signUpBackground from '../../assets/sign-up-background.png';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: center;

`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;

    }

  }

  /* Somente aplica ao 'a' dentro de Content, não sobrescreve o 'a' do form*/
  > a {
      color: #F4EDE8;
      margin-top: 4px;
      text-decoration: none;
      transition: color 0.2s;
      display:flex;
      align-items: center;

      svg{
        margin-right: 16px;
      }

      &:hover {
        color: ${shade(0.2, '#F4EDE8')}
      }

  }

`;
export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackground}) no-repeat center;
  background-size: cover;

`;
