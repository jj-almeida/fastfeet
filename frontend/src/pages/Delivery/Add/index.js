import React, { useRef } from 'react';
import { Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { MdChevronLeft, MdCheck } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import FormContainer from '~/components/FormContainer';
import Input from '~/components/Input';
import AsyncSelectInput from '../AsyncSelect';

import { BackButton, SaveButton } from './styles';

export default function Add() {
  const formRef = useRef();

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        recipient_id: Yup.string()
          .nullable()
          .required('Destinatário obrigatório'),
        deliveryman_id: Yup.string()
          .nullable()
          .required('Entregador obrigatório'),
        product: Yup.string().required('Produto obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post(`/deliveries`, {
        recipient_id: data.recipient_id.value,
        deliveryman_id: data.deliveryman_id.value,
        product: data.product,
      });

      toast.success('Encomenda criada com sucesso!');

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
          <h2>Cadastro de encomendas</h2>

          <div>
            <BackButton onClick={() => history.push('/deliveries')}>
              <MdChevronLeft size={22} color="#fff" />
              Voltar
            </BackButton>

            <SaveButton>
              <MdCheck size={22} color="#fff" onClick={() => {}} />
              Salvar
            </SaveButton>
          </div>
        </header>

        <AsyncSelectInput
          label="Destinatário"
          name="recipient_id"
          endpoint="recipients"
          placeholder="Ludvig van Beethoven"
        />

        <AsyncSelectInput
          label="Entregador"
          name="deliveryman_id"
          endpoint="deliveryman"
          placeholder="John Doe"
        />

        <Input label="Produto" name="product" placeholder="Yamaha SX7" />
      </Form>
    </FormContainer>
  );
}
