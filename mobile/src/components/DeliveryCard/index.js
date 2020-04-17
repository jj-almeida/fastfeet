import React, { useMemo, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import StepIndicator from 'react-native-step-indicator';

import Icon from 'react-native-vector-icons/MaterialIcons';

import formatDate from '~/utils/formatDate';

import {
  Container,
  Header,
  Title,
  Body,
  Footer,
  Content,
  Label,
  Text,
  DetailButton,
  DetailButtonText,
} from './styles';

export default function DeliveryCard({ data }) {
  const { navigate } = useNavigation();

  const [currentPosition, setCurrentPosition] = useState(0);

  function handleShowDelivery() {
    navigate('DetailsDelivery', { data });
  }

  const dateParsed = useMemo(() => {
    return formatDate(data.created_at);
  }, [data.created_at]);

  useEffect(() => {
    async function loadStatus() {
      if (data.start_date) {
        setCurrentPosition(1);
      }
      if (data.start_date && data.end_date) {
        setCurrentPosition(2);
      }
    }
    loadStatus();
  }, [data]);

  const labels = ['Aguardando Retirada', 'Retirada', 'Entregue'];

  const customStyles = {
    stepIndicatorSize: 13,
    currentStepIndicatorSize: 13,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 2,
    stepStrokeCurrentColor: '#7d40e7',
    stepStrokeWidth: 2,
    stepStrokeFinishedColor: '#7d40e7',
    stepStrokeUnFinishedColor: '#aaa',
    separatorFinishedColor: '#7d40e7',
    separatorUnFinishedColor: '#aaa',
    stepIndicatorFinishedColor: '#7d40e7',
    stepIndicatorUnFinishedColor: '#fff',
    stepIndicatorCurrentColor: '#7d40e7',
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
    stepIndicatorLabelCurrentColor: '#7d40e7',
    stepIndicatorLabelFinishedColor: '#7d40e7',
    stepIndicatorLabelUnFinishedColor: '#aaa',
    labelColor: '#999',
    labelSize: 13,
    currentStepLabelColor: '#999',
  };

  return (
    <Container>
      <Header>
        <Icon name="local-shipping" color="#7d40e7" size={24} />
        <Title>{data.product}</Title>
      </Header>

      <Body>
        <StepIndicator
          stepCount={3}
          customStyles={customStyles}
          currentPosition={currentPosition}
          labels={labels}
        />
      </Body>

      <Footer>
        <Content>
          <Label>Data</Label>
          <Text>{dateParsed}</Text>
        </Content>

        <Content>
          <Label>Cidade</Label>
          <Text>{data.recipient.city}</Text>
        </Content>

        <Content>
          <DetailButton onPress={() => handleShowDelivery(data.id)}>
            <DetailButtonText>Ver detalhes</DetailButtonText>
          </DetailButton>
        </Content>
      </Footer>
    </Container>
  );
}

DeliveryCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    product: PropTypes.string,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    created_at: PropTypes.string,
    recipient: PropTypes.shape({
      city: PropTypes.string,
    }),
  }).isRequired,
};
