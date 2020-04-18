import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { MdMoreHoriz, MdModeEdit, MdDeleteForever } from 'react-icons/md';

import history from '~/services/history';
import api from '~/services/api';

import { Container, ActionList } from './styles';

export default function Actions({ deliveryman }) {
  const [visible, setVisible] = useState(false);

  async function handleDelete(id) {
    try {
      const response = await api.delete(`/deliveryman/${id}`);

      toast.success(`Entregador #${id} excluído com sucesso!`);

      history.push('/');
    } catch ({ response }) {
      toast.error(response.data.error);
    }
  }

  function handleConfirmDelete(id) {
    confirmAlert({
      title: 'Alerta',
      message: `Tem certeza que deseja excluir o entregador #${id}?`,
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
    history.push(`/deliverymans/edit/${id}`);
  }

  return (
    <Container>
      <button type="button" onClick={handleToggleVisible}>
        <MdMoreHoriz size={22} color="#c6c6c6" />
      </button>

      <ActionList visible={visible}>
        <div>
          <button type="button" onClick={() => handleEdit(deliveryman.id)}>
            <MdModeEdit size={22} color="#4d85ee" />
            Editar
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => handleConfirmDelete(deliveryman.id)}
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
  deliveryman: PropTypes.shape().isRequired,
};
