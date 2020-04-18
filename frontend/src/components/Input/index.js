import React, { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';

import { useField } from '@rocketseat/unform';

import { Container, LabelContainer } from './styles';

// style
export default function Input({ name, label, placeholder, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <LabelContainer>
        <strong>{label}</strong>
      </LabelContainer>
      <input
        placeholder={placeholder}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
    </Container>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  // style: PropTypes.shape(),
};

Input.defaultProps = {
  placeholder: '',
};

// Input.defaultProps = {
//   style: {},
// };
