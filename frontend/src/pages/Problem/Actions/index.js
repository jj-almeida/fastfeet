import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { MdMoreHoriz, MdVisibility, MdDeleteForever } from 'react-icons/md';

import history from '~/services/history';
import api from '~/services/api';

import { Container, ActionList, DetailContainer } from './styles';

export default function Actions({ problem }) {
  const [visible, setVisible] = useState(false);

  async function handleDelete(id) {
    try {
      const response = await api.delete(`problem/${id}/cancel-delivery`);

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

  function handleDetail() {
    confirmAlert({
      customUI: () => {
        return (
          <DetailContainer>
            <div>
              <strong>VISUALIZAR PROBLEMA</strong>
              <p>{problem.description}</p>
            </div>
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
          <button type="button" onClick={() => handleDetail(problem)}>
            <MdVisibility size={22} color="#8e5be8" />
            Visualizar
          </button>
        </div>

        <div>
          <button type="button" onClick={() => handleConfirmDelete(problem.id)}>
            <MdDeleteForever size={22} color="#de3b3b" />
            Cancelar encomenda
          </button>
        </div>
      </ActionList>
    </Container>
  );
}

Actions.propTypes = {
  problem: PropTypes.shape().isRequired,
};
