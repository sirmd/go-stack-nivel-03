import React from 'react';
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
import logoImg from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/input';
import Button from '../../components/button';


const SignUp: React.FC = () => {

  const navigation = useNavigation();

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
            <Input name="name" icon="user" placeholder="Nome" />
            <Input name="mail" icon="mail" placeholder="E-mail" />
            <Input name="password" secureTextEntry icon="lock" placeholder="Senha" />
            <Button onPress={() => { console.log('ops') }}>Criar</Button>
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
