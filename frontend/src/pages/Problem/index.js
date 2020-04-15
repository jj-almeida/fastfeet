import React from 'react';

import { MdAdd } from 'react-icons/md';

import Container from '~/components/Container';
import SearchBar from '~/components/SearchBar';

// import { AddButton } from './styles';

export default function Problem() {
  return (
    <Container>
      <h2>Problemas na entrega</h2>

      {/* <div>
        <SearchBar name="encomendas" />

        <AddButton>
          <MdAdd size={22} color="#fff" />
          Cadastrar
        </AddButton>
      </div> */}
    </Container>
  );
}
