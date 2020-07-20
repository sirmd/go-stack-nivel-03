import React, { useEffect, useRef } from 'react';
import { Container, TextInput, InputIcon } from './styles';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

// Da mesma forma como foi feito ao Button, é criada uma interface
// para definir os parâmetros que o Input irá receber.
interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  const inputElementRef = useRef<any>(null);
  // Faz o registro do input no unform
  const { registerField, defaultValue = '', fieldName, error } = useField(name);

  // Cria a referência para o input
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });


  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',

      setValue(ref: any, value) {
        inputValueRef.current.value = value;

        // Para mudar visualmente o texto no input
        inputElementRef.current.setNativeProps({ text: value });
      },

      // O que irá fazer ao limpar o elemento
      clearValue() {
        inputValueRef.current.value = ''
        inputElementRef.current.clear();
      }
    })
  }, [fieldName, registerField])


  return (<Container >
    <InputIcon name={icon} size={20} color="#666360" />
    <TextInput
      keyboardAppearance="dark" // muda o tema do teclado
      defaultValue={defaultValue}
      placeholderTextColor="#666360"
      onChangeText={(value) => {
        inputValueRef.current.value = value;
      }}
      {...rest} />
  </Container>);

};

export default Input;
