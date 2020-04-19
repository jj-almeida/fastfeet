import React from 'react';
import PropTypes from 'prop-types';
import { MdFiberManualRecord } from 'react-icons/md';

import { Container } from './styles';

export default function Status({ delivery }) {
  const getStatus = () => {
    let status = {};

    if (delivery.canceled_at) {
      status = { text: 'CANCELADA', background: '#fab0b0', color: '#de3b3b' };
      return status;
    }

    if (delivery.end_date) {
      status = { text: 'ENTREGUE', background: '#dff0df', color: '#2ca42b' };
      return status;
    }

    if (delivery.start_date) {
      status = { text: 'RETIRADA', background: '#bad2ff', color: '#4d85ee' };
      return status;
    }

    status = { text: 'PENDENTE', background: '#f0f0df', color: '#c1bc35' };

    return status;
  };

  const Tstatus = getStatus();

  return (
    <Container color={Tstatus.color} background={Tstatus.background}>
      <div>
        <MdFiberManualRecord />
        <span>{Tstatus.text}</span>
      </div>
    </Container>
  );
}

Status.propTypes = {
  delivery: PropTypes.shape().isRequired,
};
