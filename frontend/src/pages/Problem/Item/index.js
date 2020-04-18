import React from 'react';
import PropTypes from 'prop-types';

import Actions from '../Actions';

export default function Item({ problem }) {
  return (
    <tbody>
      <tr key={problem.id}>
        <td>#{problem.id}</td>
        <td>{problem.description}</td>
        <Actions problem={problem} />
      </tr>
    </tbody>
  );
}

Item.propTypes = {
  problem: PropTypes.shape().isRequired,
};
