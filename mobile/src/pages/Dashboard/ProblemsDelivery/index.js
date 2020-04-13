import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import { Container, Title, List } from './styles';

import formatDate from '~/utils/formatDate';
// import ProblemList from '~/components/ProblemList';

import api from '~/services/api';

export default function ProblemsDelivery({ route }) {
  const { navigate } = useNavigation();

  const data = route.params;
  console.log(data.delivery_id);

  const [problems, setProblems] = useState([]);

  // TODO: Checar warning
  useEffect(() => {
    async function loadProblems() {
      const response = await api.get(`/delivery/${data.delivery_id}/problems`);
      console.log(response);

      const problemList = response.data.map((item) => ({
        ...item,
        createdAt: format(item.created_at),
      }));
      console.log(problemList);
      setProblems(problemList);
    }

    loadProblems();
  }, [data.delivery_id]);

  return (
    <>
      <Container>
        <Title>{`Encomenda ${data.delivery_id}`}</Title>

        <List
          data={problems}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <ProblemList
              data={item}
              onPress={() => {
                navigation.navigate('ReadProblem', { item });
              }}
            />
          )}
        />
      </Container>
    </>
  );
}

// ShowProblems.navigationOptions = ({ navigation }) => ({
//   title: 'Visualizar problemas',
//   headerLeft: () => (
//     <TouchableOpacity
//       onPress={() => {
//         navigation.goBack();
//       }}
//     >
//       <Icon name="chevron-left" size={24} color="#FFF" />
//     </TouchableOpacity>
//   ),
// });

// ProblemsDelivery.propTypes = {
//   navigation: PropTypes.shape({
//     navigate: PropTypes.func,
//     goBack: PropTypes.func,
//     getParam: PropTypes.func,
//     data: PropTypes.shape({
//       id: PropTypes.number,
//     }),
//   }).isRequired,
// };
