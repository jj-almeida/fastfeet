import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';

import Pagination from 'react-js-pagination';

import Container from '~/components/Container';
import SearchBar from '~/components/SearchBar';
import Loading from '~/components/Loading';
import Empty from '~/components/Empty';
import Table from '~/components/Table';
import Item from './Item';

import api from '~/services/api';
import history from '~/services/history';

import { AddButton } from './styles';

/**
 * TODO: Arrumar SearchBar, paginacao
 */

export default function Delivery() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState('');
  const [lengthOrders, setLengthOrders] = useState(0);
  const [page, setPage] = useState(1);

  async function loadOrders() {
    setLoading(true);
    const response = await api.get(`/deliveries`, {
      params: {
        page,
      },
    });

    const data = response.data.map(order => ({
      ...order,
      disabled: order.end_date,
    }));

    setLengthOrders(response.data.length);
    setOrders(data);
    // setPage(1);
    setLoading(false);
  }

  useEffect(() => {
    loadOrders(1);
  }, []);

  return (
    <Container>
      <h2>Gerenciando encomendas</h2>

      <div>
        <SearchBar
          name="encomendas" /* search={product} setSearch={setProduct} */
        />

        <AddButton onClick={() => history.push('deliveries/new')} type="button">
          <MdAdd size={22} color="#fff" />
          Cadastrar
        </AddButton>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <Table>
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

          {orders.map(delivery => (
            <Item delivery={delivery} />
          ))}
        </Table>
      )}

      {/* {orders.length > 0 && (
        <Pagination
          activePage={page}
          itemsCountPerPage={5}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={loadOrders}
        />
      )} */}
    </Container>
  );
}
