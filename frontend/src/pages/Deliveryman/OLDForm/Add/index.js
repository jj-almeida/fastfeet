import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import Container from '~/components/Container';
import { BackButton, SaveButton } from './styles';

export default function DeliveryFormAdd() {
  const schema = Yup.object().shape({});

  function handleSubmit() {}

  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <Container>
        <header>
          <h2>Cadastro de encomendas</h2>
          <div>
            <Link to="/deliveries">
              <BackButton>Voltar</BackButton>
            </Link>
            <SaveButton type="submit">Salvar</SaveButton>
          </div>
        </header>
        <div>
          <Input
            name="destinatario"
            label="Destinatário"
            placeholder="Ludwig van Beethoven"
          />
          <Input name="entregador" label="Entregador" placeholder="John Doe" />
          <Input
            name="nome do produto"
            label="Nome do produto"
            placeholder="Yamaha SX7"
          />
        </div>
      </Container>
    </Form>
  );
}
