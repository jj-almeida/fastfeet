import React from 'react';
import PropTypes from 'prop-types';

import Actions from '../Actions';

// import { Container } from './styles';

export default function Item({ problem }) {
  return (
    <tbody>
      <tr key={problem.id}>
        <td>#{problem.id}</td>
        <td>{problem.description}</td>
        <Actions recipient={problem} />
      </tr>
    </tbody>
  );
}

Item.propTypes = {
  problem: PropTypes.shape().isRequired,
};
