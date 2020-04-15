import React from 'react';

import { MdAdd } from 'react-icons/md';

import Container from '~/components/Container';
import SearchBar from '~/components/SearchBar';

import { AddButton } from './styles';

export default function Recipient() {
  return (
    <Container>
      <h2>Gerenciando destinatários</h2>

      <div>
        <SearchBar name="destinatários" />

        <AddButton>
          <MdAdd size={22} color="#fff" />
          Cadastrar
        </AddButton>
      </div>
    </Container>
  );
}
