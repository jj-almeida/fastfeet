import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { MdChevronLeft, MdCheck } from 'react-icons/md';

import FormContainer from '~/components/FormContainer';
import Input from '~/components/Input';
import AsyncSelectInput from '../AsyncSelect';

import api from '~/services/api';
import history from '~/services/history';

import { BackButton, SaveButton } from './styles';

// TODO: Toast de erro e tray catch e Yup!
export default function Edit({ match }) {
  const formRef = useRef();

  const [deliveries, setDeliveries] = useState();

  const { id } = match.params;

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get(`/deliveries/${id}`);

      setDeliveries(response.data);
    }

    loadDeliveries();
  }, [id]);

  async function handleSubmit(data) {
    try {
      await api.put(`/deliveries/${id}`, {
        recipient_id: data.recipient_id.value,
        deliveryman_id: data.deliveryman_id.value,
        product: data.product,
      });

      toast.success('A entrega foi editada com sucesso');
    } catch (err) {
      toast.error('Falha ao editar delivery. Tente novamente!');
    }
  }

  return (
    <FormContainer>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={deliveries}>
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

Edit.propTypes = {
  match: PropTypes.shape().isRequired,
};
