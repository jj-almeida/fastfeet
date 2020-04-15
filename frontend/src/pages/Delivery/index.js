import React from 'react';

import { MdAdd } from 'react-icons/md';

import Container from '~/components/Container';
import SearchBar from '~/components/SearchBar';
import Loading from '~/components/Loading';
import Empty from '~/components/Empty';

import { AddButton } from './styles';

export default function Delivery() {
  return (
    <Container>
      <h2>Gerenciando encomendas</h2>

      <div>
        <SearchBar name="encomendas" />

        <AddButton>
          <MdAdd size={22} color="#fff" />
          Cadastrar
        </AddButton>
      </div>
      {/* <Loading /> */}
    </Container>
  );
}
