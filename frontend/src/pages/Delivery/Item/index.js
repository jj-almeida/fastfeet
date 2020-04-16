import React from 'react';
import PropTypes from 'prop-types';

import Status from '../Status';
import Actions from '../Actions';

// import { Container } from './styles';

export default function Item({ delivery }) {
  return (
    <tbody>
      <tr key={delivery.id}>
        <td>#{delivery.id}</td>
        <td>{delivery.recipient.name}</td>
        <td>
          <div>
            <img
              src={
                delivery.deliveryman.avatar
                  ? delivery.deliveryman.avatar.url
                  : `https://ui-avatars.com/api/?name=${delivery.deliveryman.name}`
              }
              alt="Avatar"
            />
            {delivery.deliveryman.name}
          </div>
        </td>
        <td>{delivery.recipient.city}</td>
        <td>{delivery.recipient.state}</td>
        <Status delivery={delivery} />
        <Actions delivery={delivery} />
      </tr>
    </tbody>
  );
}

Item.propTypes = {
  delivery: PropTypes.shape().isRequired,
  // onDelete: PropTypes.func.isRequired,
};
