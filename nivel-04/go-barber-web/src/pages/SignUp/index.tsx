import React, { useCallback } from 'react';
import { Container, Content, Background } from './styles';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';
import logo from '../../assets/logo.svg'
const SignUp: React.FC = () => {

  const handleSubmit = useCallback(async (data: object): Promise<void> => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string().required('O e-mail é obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'A senha deve ter no mínimo 6 dígitos'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="GoBarber" />
        <Form initialData={{}} onSubmit={handleSubmit}  >
          <h1>
            Faça seu cadastro
          </h1>

          <Input icon={FiUser} name="name" placeholder="Nome" />
          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input icon={FiLock} name="password" type="password" placeholder="Senha" />

          <Button type="submit">Cadastrar</Button>

        </Form>

        <a href="">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container >
  );
}

export default SignUp;
