import React, { useRef, useState, useEffect } from 'react';
import { Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { MdChevronLeft, MdCheck } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import FormContainer from '~/components/FormContainer';
import Input from '~/components/Input';
import AsyncSelectInput from '../AsyncSelect';

import { BackButton, SaveButton } from './styles';

export default function Edit({ match }) {
  const formRef = useRef();

  const [deliveries, setDeliveries] = useState();

  const { id } = match.params;

  useEffect(() => {
    async function loadDeliveries() {
      try {
        const response = await api.get(`/deliveries/${id}`);

        setDeliveries(response.data);
      } catch ({ response }) {
        toast.error(response.data.error);
      }
    }

    loadDeliveries();
  }, [id]);

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

      await api.put(`/deliveries/${id}`, {
        recipient_id: data.recipient_id.value,
        deliveryman_id: data.deliveryman_id.value,
        product: data.product,
      });

      toast.success('Encomenda editada com sucesso');

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
      <Form ref={formRef} onSubmit={handleSubmit} initialData={deliveries}>
        <header>
          <h2>Edição de encomendas</h2>

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
