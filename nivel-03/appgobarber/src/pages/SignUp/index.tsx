import React, { useRef, useCallback } from 'react';
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
  BackToSignIn,
  BackToSignInText
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import logoImg from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/input';
import Button from '../../components/button';


const SignUp: React.FC = () => {
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const formRef = useRef<FormHandles>(null);

  const navigation = useNavigation();

  const handleSignUp = useCallback((data: object) => {
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
              <Title>Crie sua conta</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSignUp} style={{ width: '100%' }}>
              <Input
                name="name"
                icon="user"
                placeholder="Nome"

                autoCapitalize="words"

                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}

              />
              <Input
                ref={emailInputRef}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                name="mail"
                icon="mail"
                placeholder="E-mail"

                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <Input
                ref={passwordInputRef}
                name="password"
                secureTextEntry
                icon="lock"
                placeholder="Senha"
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
              <Button onPress={() => { formRef.current?.submitForm(); }}>Criar</Button>
            </Form>
          </Container>
        </ScrollView>

      </KeyboardAvoidingView>
      <BackToSignIn onPress={() => navigation.goBack()}>
        <>
          <Icon name="arrow-left" size={20} color="#fff" />
          <BackToSignInText>Voltar para login</BackToSignInText>
        </>
      </BackToSignIn>
    </>
  );
}

export default SignUp;
