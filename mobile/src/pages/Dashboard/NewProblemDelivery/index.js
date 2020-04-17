import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, Alert } from 'react-native';
import PropTypes from 'prop-types';

import api from '~/services/api';

import { Container, Header, Body, Form, TInput, SubmitButton } from './styles';

export default function NewProblemDelivery({ route }) {
  const { navigate } = useNavigation();

  const data = route.params;

  const [description, setDescription] = useState('');

  async function handleSubmit() {
    try {
      const response = await api.post(
        `/delivery/${data.delivery_id}/problems`,
        {
          description,
        }
      );
      Alert.alert('Sucesso!', 'Seu problema foi cadastrado com sucesso!');

      navigate('Dashboard');
    } catch ({ response }) {
      Alert.alert('Falha!', response.data.error);
    }
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Header />

      <Body>
        <Form>
          <TInput
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Inclua aqui o problema que ocorreu na entrega."
            multiline
            numberOfLines={50}
            maxLength={500}
            value={description}
            onChangeText={setDescription}
          />

          <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
        </Form>
      </Body>
    </Container>
  );
}

NewProblemDelivery.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      delivery_id: PropTypes.number,
    }),
  }).isRequired,
};
