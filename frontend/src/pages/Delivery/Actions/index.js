import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import {
  MdMoreHoriz,
  MdVisibility,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

import formatDate from '~/utils/formatDate';
import history from '~/services/history';
import api from '~/services/api';

import { Container, ActionList, DetailContainer } from './styles';

export default function Actions({ delivery }) {
  const [visible, setVisible] = useState(false);

  async function handleDelete(id) {
    try {
      const response = await api.delete(`/deliveries/${id}`);

      toast.success(`Item #${id} excluído com sucesso!`);

      history.push('/');
    } catch ({ response }) {
      toast.error(response.data.error);
    }
  }

  function handleConfirmDelete(id) {
    confirmAlert({
      title: 'Alerta',
      message: `Tem certeza que deseja excluir o item #${id}?`,
      buttons: [
        {
          label: 'Sim',
          onClick: () => handleDelete(id),
        },
        {
          label: 'Não',
        },
      ],
    });
  }

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleEdit(id) {
    history.push(`/deliveries/edit/${id}`);
  }

  function handleDetail() {
    confirmAlert({
      customUI: () => {
        return (
          <DetailContainer>
            <div>
              <strong>Informações da encomenda</strong>

              <p>
                {delivery.recipient.street}, {delivery.recipient.number}
              </p>
              <p>
                {delivery.recipient.city} - {delivery.recipient.region}
              </p>
              <p>{delivery.recipient.postal_code}</p>
            </div>

            <div>
              <strong>Datas</strong>
              <p>
                <span>Retirada:</span>{' '}
                {delivery.start_date
                  ? formatDate(delivery.start_date)
                  : '--/--/----'}
              </p>
              <p>
                <span>Entrega:</span>
                {delivery.end_date
                  ? formatDate(delivery.end_date)
                  : '--/--/----'}
              </p>
            </div>
            {delivery.signature && (
              <>
                <strong>Assinatura do destinatário</strong>
                <main>
                  <img src={delivery.signature.url} alt="Assinatura" />
                </main>
              </>
            )}
          </DetailContainer>
        );
      },
    });
  }

  return (
    <Container>
      <button type="button" onClick={handleToggleVisible}>
        <MdMoreHoriz size={22} color="#c6c6c6" />
      </button>

      <ActionList visible={visible}>
        <div>
          <button type="button" onClick={() => handleDetail(delivery)}>
            <MdVisibility size={22} color="#8e5be8" />
            Visualizar
          </button>
        </div>
        <div>
          <button type="button" onClick={() => handleEdit(delivery.id)}>
            <MdModeEdit size={22} color="#4d85ee" />
            Editar
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => handleConfirmDelete(delivery.id)}
          >
            <MdDeleteForever size={22} color="#de3b3b" />
            Excluir
          </button>
        </div>
      </ActionList>
    </Container>
  );
}

Actions.propTypes = {
  delivery: PropTypes.shape().isRequired,
};
