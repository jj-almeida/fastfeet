/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useCallback } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { MdAdd, MdChevronLeft, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import Container from '~/components/Container';
import Loading from '~/components/Loading';
import Empty from '~/components/Empty';
import TableContainer from '~/components/TableContainer';
import Item from './Item';

import { AddButton, Footer } from './styles';

/**
 * TODO: Arrumar estilo Input SearchBar
 */

export default function Delivery() {
  const [loading, setLoading] = useState(false);
  const [deliveries, setDeliveries] = useState([]);
  const [page, setPage] = useState(1);

  const handleSearchDelivery = useCallback(({ search }) => {
    async function searchDelivery() {
      try {
        const response = await api.get(`/deliveries`, {
          params: { q: search },
        });

        setDeliveries(response.data);
      } catch ({ response }) {
        toast.error(response.error);
      }
    }
    searchDelivery();
  }, []);

  useEffect(() => {
    setLoading(true);

    async function loadDeliveries() {
      try {
        const response = await api.get('/deliveries', {
          params: { page },
        });

        setDeliveries(response.data);
      } catch ({ response }) {
        toast.error(response.error);
      }
    }

    loadDeliveries();

    setLoading(false);
  }, [page]);

  function handlePrevPage() {
    if (page === 1) return;
    setPage(page - 1);
  }

  function handleNextPage() {
    if (deliveries.length < 5) return;
    setPage(page + 1);
  }

  return (
    <Container>
      <h2>Gerenciando encomendas</h2>

      <div>
        <Form onSubmit={handleSearchDelivery}>
          <Input
            name="search"
            type="search"
            placeholder="Buscar por encomendas"
          />
        </Form>

        <AddButton onClick={() => history.push('deliveries/new')} type="button">
          <MdAdd size={22} color="#fff" />
          Cadastrar
        </AddButton>
      </div>

      {loading ? (
        <Loading />
      ) : !deliveries.length ? (
        <Empty name="encomendas" />
      ) : (
        <>
          <TableContainer>
            <thead>
              <tr>
                <th>ID</th>
                <th>Destinatário</th>
                <th>Entregador</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>

            {deliveries.map(delivery => (
              <Item delivery={delivery} />
            ))}
          </TableContainer>

          <Footer>
            <header>
              <button
                type="button"
                onClick={() => {
                  handlePrevPage();
                }}
              >
                <MdChevronLeft size={36} color="#7d40e7" />
              </button>
              <button
                type="button"
                onClick={() => {
                  handleNextPage();
                }}
              >
                <MdChevronRight size={36} color="#7d40e7" />
              </button>
            </header>
          </Footer>
        </>
      )}
    </Container>
  );
}
