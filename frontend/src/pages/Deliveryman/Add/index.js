import React, { useRef } from 'react';
import { Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { MdChevronLeft, MdCheck } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import FormContainer from '~/components/FormContainer';
import Input from '~/components/Input';
import AvatarInput from '../AvatarInput';

import { BackButton, SaveButton } from './styles';

export default function Add() {
  const formRef = useRef();

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        avatar_id: Yup.string(),
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .email('Insira um e-mail válido')
          .required('Email obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post(`/deliveryman`, data);

      toast.success('Entregador criado com sucesso!');

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
          <h2>Cadastro de entregadores</h2>

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

        <AvatarInput name="avatar_id" />
        <Input label="Nome" name="name" placeholder="John Doe" />

        <Input
          label="Email"
          name="email"
          placeholder="example@rocketseat.com.br"
        />
      </Form>
    </FormContainer>
  );
}
