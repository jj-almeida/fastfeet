import React from 'react';

import { MdChevronLeft, MdCheck } from 'react-icons/md';

import FormContainer from '~/components/FormContainer';

import history from '~/services/history';

import { BackButton, SaveButton } from './styles';

export default function Add() {
  return (
    <FormContainer>
      <header>
        <h2>Edição de entregadores</h2>

        <div>
          <BackButton onClick={() => history.push('/deliverymans')}>
            <MdChevronLeft size={22} color="#fff" />
            Voltar
          </BackButton>

          <SaveButton>
            <MdCheck size={22} color="#fff" onClick={() => {}} />
            Salvar
          </SaveButton>
        </div>
      </header>
    </FormContainer>
  );
}
