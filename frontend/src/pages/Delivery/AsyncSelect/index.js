import React, { useRef, useEffect, useState } from 'react';
import { useField } from '@rocketseat/unform';
import AsyncSelect from 'react-select/async';
import PropTypes from 'prop-types';

import api from '~/services/api';

import { Container, Label } from './styles';

export default function AsyncSelectInput({ name, label, endpoint, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [entityOptions, setEntityOptions] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`/${endpoint}`);

      const data = response.data.map(item => ({
        value: item.id,
        label: item.name,
      }));

      setEntityOptions(data);
    }
    loadData();
  }, [endpoint]);

  const filterColors = inputValue => {
    return entityOptions.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = inputValue =>
    new Promise(resolve => {
      resolve(filterColors(inputValue));
    });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'select.state.value',
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.select.state.value) {
            return [];
          }
          return ref.select.state.value.map(option => option.value);
        }
        if (!ref.select.state.value) {
          return '';
        }
        return ref.select.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Container error={error}>
      <Label>
        <strong>{label}</strong>
      </Label>
      <AsyncSelect
        cacheOptions
        defaultOptions={entityOptions}
        loadOptions={promiseOptions}
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        {...rest}
      />
    </Container>
  );
}

AsyncSelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  endpoint: PropTypes.string.isRequired,
};
