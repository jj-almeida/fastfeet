import React from 'react';
import PropTypes from 'prop-types';

import { MdClear } from 'react-icons/md';

import { Container } from './styles';

export default function Empty({ name }) {
  return (
    <Container>
      <MdClear size={45} color="#999" />
      <strong>Ooops, não há {name}!</strong>
    </Container>
  );
}

Empty.propTypes = {
  name: PropTypes.string.isRequired,
};
