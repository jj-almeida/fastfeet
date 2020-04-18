import React from 'react';
import PropTypes from 'prop-types';

import Actions from '../Actions';

export default function Item({ deliveryman }) {
  return (
    <tbody>
      <tr key={deliveryman.id}>
        <td>#{deliveryman.id}</td>
        <td>
          <div>
            <img
              src={
                deliveryman.avatar
                  ? deliveryman.avatar.url
                  : `https://ui-avatars.com/api/?name=${deliveryman.name}`
              }
              alt="Avatar"
            />
          </div>
        </td>
        <td>{deliveryman.name}</td>
        <td>{deliveryman.email}</td>
        <Actions deliveryman={deliveryman} />
      </tr>
    </tbody>
  );
}

Item.propTypes = {
  deliveryman: PropTypes.shape().isRequired,
};
