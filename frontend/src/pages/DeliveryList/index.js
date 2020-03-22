import React from 'react';
import api from '~/services/api';

// import { Container } from './styles';

export default function DeliveryList() {
  api.get('deliveryman');
  return <h1>DeliveryList</h1>;
}
