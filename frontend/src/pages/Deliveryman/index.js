import React from 'react';

import { MdAdd } from 'react-icons/md';

import Container from '~/components/Container';
import SearchBar from '~/components/SearchBar';

import { AddButton } from './styles';

export default function Deliveryman() {
  return (
    <Container>
      <h2>Gerenciando entregadores</h2>

      <div>
        <SearchBar name="entregadores" />

        <AddButton>
          <MdAdd size={22} color="#fff" />
          Cadastrar
        </AddButton>
      </div>
    </Container>
  );
}
