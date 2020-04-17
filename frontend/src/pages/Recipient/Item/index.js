import React from 'react';
import PropTypes from 'prop-types';

import Actions from '../Actions';

// import { Container } from './styles';

export default function Item({ recipient }) {
  return (
    <tbody>
      <tr key={recipient.id}>
        <td>#{recipient.id}</td>
        <td>{recipient.name}</td>
        <td>
          {recipient.street}, {recipient.number}, {recipient.city} -{' '}
          {recipient.state}
        </td>
        <Actions recipient={recipient} />
      </tr>
    </tbody>
  );
}

Item.propTypes = {
  recipient: PropTypes.shape().isRequired,
};
