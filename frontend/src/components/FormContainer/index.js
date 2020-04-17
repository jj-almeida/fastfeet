import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function FormContainer({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

FormContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};
