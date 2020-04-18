import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { MdChevronLeft, MdCheck } from 'react-icons/md';

import FormContainer from '~/components/FormContainer';
import AvatarInput from '../AvatarInput';
import Input from '~/components/Input';

import api from '~/services/api';
import history from '~/services/history';

import { BackButton, SaveButton } from './styles';

export default function Edit({ match }) {
  const schema = Yup.object().shape({
    avatar_id: Yup.number(),
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
  });
  const formRef = useRef();

  const [deliverymans, setDeliverymans] = useState([]);

  const { id } = match.params;

  useEffect(() => {
    async function loadDeliveryman() {
      const response = await api.get(`/deliveryman/${id}`);

      // const [dataDetails] = response.data.filter(item => item.id == id);
      console.tron.log(response.data);

      setDeliverymans(response.data);
    }
    loadDeliveryman();
  }, [id]);

  async function handleSubmit(data) {
    try {
      // console.tron.log(data);
      await api.put(`/deliveryman/${id}`, data);
      toast.success('O entregador foi editado com sucesso');
    } catch (err) {
      toast.error('Falha ao editar entregador. Tente novamente!');
    }
  }

  return (
    <FormContainer>
      <Form
        schema={schema}
        ref={formRef}
        onSubmit={handleSubmit}
        initialData={deliverymans}
      >
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

        <AvatarInput name="avatar_id" avatarData={deliverymans.avatar} />
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
