/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';

import Container from '~/components/Container';
import Loading from '~/components/Loading';
import Empty from '~/components/Empty';
import TableContainer from '~/components/TableContainer';
import Item from './Item';

import { Footer } from './styles';

export default function Problem() {
  const [loading, setLoading] = useState(false);
  const [problems, setProblems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);

    async function loadProblems() {
      try {
        const response = await api.get('/delivery-problems', {
          params: { page },
        });

        setProblems(response.data);
      } catch ({ response }) {
        toast.error(response.error);
      }
    }

    loadProblems();

    setLoading(false);
  }, [page]);

  function handlePrevPage() {
    if (page === 1) return;
    setPage(page - 1);
  }

  function handleNextPage() {
    if (problems.length < 5) return;
    setPage(page + 1);
  }

  return (
    <Container>
      <h2>Problemas na entrega</h2>

      {loading ? (
        <Loading />
      ) : !problems.length ? (
        <Empty name="problemas" />
      ) : (
        <>
          <TableContainer>
            <thead>
              <tr>
                <th>Encomenda</th>
                <th>Problema</th>
                <th>Ações</th>
              </tr>
            </thead>

            {problems.map(problem => (
              <Item problem={problem} />
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
