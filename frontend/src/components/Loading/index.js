import React from 'react';
import { Spinner } from 'react-loading-io';

import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <Spinner size={94} color="#999" />
    </Container>
  );
}
