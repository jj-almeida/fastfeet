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
import AvatarInput from '../AvatarInput';

import { BackButton, SaveButton } from './styles';

export default function Edit({ match }) {
  const formRef = useRef();

  const [deliverymans, setDeliverymans] = useState([]);

  const { id } = match.params;

  useEffect(() => {
    async function loadDeliverymans() {
      try {
        const response = await api.get(`/deliveryman/${id}`);

        setDeliverymans(response.data);
      } catch ({ response }) {
        toast.error(response.data.error);
      }
    }

    loadDeliverymans();
  }, [id]);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        avatar_id: Yup.number(),
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string()
          .email('Insira um e-mail válido')
          .required('O e-mail é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.put(`/deliveryman/${id}`, data);

      toast.success('Entregador editado com sucesso!');

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
      <Form ref={formRef} onSubmit={handleSubmit} initialData={deliverymans}>
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

        <AvatarInput name="avatar_id" avatar={deliverymans.avatar} />
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

Edit.propTypes = {
  match: PropTypes.shape().isRequired,
};
