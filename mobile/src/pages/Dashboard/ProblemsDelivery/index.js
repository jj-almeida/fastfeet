import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import api from '~/services/api';
import formatDate from '~/utils/formatDate';

import {
  Container,
  Header,
  Body,
  Title,
  List,
  Card,
  Problem,
  Date,
} from './styles';

export default function ProblemsDelivery({ route }) {
  const { data } = route.params;

  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get(`/delivery/${data.id}/problems`);

      const problemList = response.data.map((item) => ({
        ...item,
        dateParsed: formatDate(item.created_at),
      }));

      setProblems(problemList);
    }

    loadProblems();
  }, [data.id]);

  return (
    <>
      <Container>
        <Header />

        <Body>
          <Title>{`Encomenda ${data.id}`}</Title>

          <List
            data={problems}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <Card>
                <Problem>{item.description}</Problem>
                <Date>{item.dateParsed}</Date>
              </Card>
            )}
          />
        </Body>
      </Container>
    </>
  );
}

ProblemsDelivery.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      data: PropTypes.shape({
        id: PropTypes.number,
      }),
    }),
  }).isRequired,
};
