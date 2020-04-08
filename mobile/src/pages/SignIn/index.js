import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import { Background, Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  const loading = false; // useSelector(state => state.auth.loading);

  function handleSubmit() {
    // dispatch(signInRequest(id));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Informe seu ID de cadastro"
            returnKeyType="send"
            // onSubmitEditing={handleSubmit}
            // onSubmitEditing={() => passwordRef.current.focus()}
            // value={id}
            // onChangeText={setId}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Entrar no sistema
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
