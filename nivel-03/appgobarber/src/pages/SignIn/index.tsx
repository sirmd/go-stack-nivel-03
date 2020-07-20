import React, { useCallback, useRef } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView
} from 'react-native';
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText
} from './styles';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/Feather';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import Input from '../../components/input';
import Button from '../../components/button';


const SignIn: React.FC = () => {

  // useRef serve para manipular um evento de uma forma direta e não por algum evento que ocorra
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const handleSignIn = useCallback((data: object) => {
    console.log(data);
  }, [])

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}>
          <Container >
            <Image source={logoImg} />
            <View>
              <Title>Faça seu login</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSignIn} style={{ width: '100%' }}>
              <Input name="mail" icon="mail" placeholder="E-mail" />
              <Input name="password" secureTextEntry icon="lock" placeholder="Senha" />
              <Button onPress={() => { formRef.current?.submitForm(); }}>Entrar</Button>
            </Form>
            <ForgotPassword onPress={() => { }}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>

      </KeyboardAvoidingView>
      <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <>
          <Icon name="log-in" size={20} color="#ff9000" />
          <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
        </>
      </CreateAccountButton>
    </>
  );
}

export default SignIn;
