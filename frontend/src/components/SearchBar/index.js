import React from 'react';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

export default function SearchBar({ name, search, setSearch }) {
  return (
    <Container>
      <MdSearch size={24} color="#999" />
      <input
        type="text"
        placeholder={`Buscar por ${name}`}
        value={search}
        onChange={e => [setSearch(e.target.value)]}
      />
    </Container>
  );
}

SearchBar.defaultProps = {
  search: null,
  setSearch: null,
};

SearchBar.propTypes = {
  name: PropTypes.string.isRequired,
  search: PropTypes.string,
  setSearch: PropTypes.func,
};
