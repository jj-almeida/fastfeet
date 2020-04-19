import React, { useRef } from 'react';
import { Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { MdChevronLeft, MdCheck } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import FormContainer from '~/components/FormContainer';
import Input from '~/components/Input';
import InputMask from '../InputMask';

import { BackButton, SaveButton } from './styles';

export default function Add() {
  const formRef = useRef();

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        street: Yup.string().required('Rua obrigatória'),
        number: Yup.number().required('Número obrigatório'),
        complement: Yup.string(),
        city: Yup.string().required('Cidade obrigatória'),
        state: Yup.string().required('Estado obrigatório'),
        postal_code: Yup.string().required('CEP obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post(`/recipients`, data);

      toast.success('Destinatário criado com sucesso!');

      history.push('/');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          toast.error(error.message);
        });
      } else {
        toast.error(err.response.data.error);
      }
    }
  }

  return (
    <FormContainer>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <header>
          <h2>Cadastro de destinatários</h2>

          <div>
            <BackButton onClick={() => history.push('/recipients')}>
              <MdChevronLeft size={22} color="#fff" />
              Voltar
            </BackButton>

            <SaveButton>
              <MdCheck size={22} color="#fff" onClick={() => {}} />
              Salvar
            </SaveButton>
          </div>
        </header>

        <Input label="Nome" name="name" placeholder="Ludwig van Beethoven" />
        <Input label="Rua" name="street" placeholder="Rua Beethoven" />
        <Input label="Número" name="number" placeholder="1729" />
        <Input label="Complemento" name="complement" />
        <Input label="Cidade" name="city" placeholder="Diadema" />
        <Input label="Estado" name="state" placeholder="São Paulo" />
        <InputMask
          label="CEP"
          name="postal_code"
          placeholder="09960-580"
          mask="99999-999"
        />
      </Form>
    </FormContainer>
  );
}
