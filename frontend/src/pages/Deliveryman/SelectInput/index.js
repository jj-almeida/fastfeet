import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';
import AsyncSelect from 'react-select/async';

import api from '~/services/api';
// import { Container, LabelContainer } from './styles';

export default function SelectInput({ name, label, input_value, ...rest }) {
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [selectData, setSelectData] = useState([]);

  const selectRef = useRef(null);
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  input_Vtem: PropTypes.string.isRequired,
};
