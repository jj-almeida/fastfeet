import React, { useRef, useEffect } from 'react';
import ReactInputMask from 'react-input-mask';
import { useField } from '@rocketseat/unform';
import Proptypes from 'prop-types';

import { Container, Label } from './styles';

export default function MaskInput({ name, label, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref, value) {
        ref.setInputValue('');
      },
      clearValue(ref) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Label>
        <strong>{label}</strong>
      </Label>
      <ReactInputMask ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Container>
  );
}

MaskInput.propTypes = {
  name: Proptypes.string.isRequired,
  label: Proptypes.string.isRequired,
};
