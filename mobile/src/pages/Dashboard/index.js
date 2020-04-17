import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity, StatusBar, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '~/store/modules/auth/actions';
import api from '~/services/api';

import DeliveryCard from '~/components/DeliveryCard';

import {
  Container,
  Header,
  Avatar,
  NameContainer,
  Welcome,
  Name,
  TabContainer,
  TabBar,
  Title,
  Tab,
  TabText,
  List,
} from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  const [deliveries, setDeliveries] = useState([]);
  const [delivered, setDelivered] = useState(false);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    async function loadDeliveries() {
      if (delivered) {
        try {
          const response = await api.get(
            `deliverymans/${profile.id}/deliveriesclosed/`
          );

          setDeliveries(response.data);
        } catch ({ response }) {
          Alert.alert('Falha!', response.data.error);
        }
      }

      if (!delivered) {
        try {
          const response = await api.get(
            `deliverymans/${profile.id}/deliveriesopen/`
          );

          setDeliveries(response.data);
        } catch ({ response }) {
          Alert.alert('Falha!', response.data.error);
        }
      }

      setloading(false);
    }

    loadDeliveries();
  }, [delivered, profile.id, loading]);

  async function loadPage() {
    setloading(true);
  }

  async function deliveriesFilter(data) {
    if (data) {
      setDelivered(true);
    }
    if (!data) {
      setDelivered(false);
    }
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Header>
        <Avatar
          source={{
            uri: profile.avatar
              ? `http://10.0.2.2:3333/files/${profile.avatar.path}`
              : `https://ui-avatars.com/api/?name=${profile.name}`,
          }}
        />
        <NameContainer>
          <Welcome>Bem vindo de volta,</Welcome>
          <Name>{profile.name}</Name>
        </NameContainer>

        <TouchableOpacity onPress={handleLogout}>
          <Icon name="exit-to-app" size={24} color="#e74040" />
        </TouchableOpacity>
      </Header>

      <TabContainer>
        <Title>Entregas</Title>

        <TabBar>
          <Tab
            onPress={() => {
              deliveriesFilter(false);
            }}
          >
            <TabText
              style={{
                color: !delivered ? '#7d40e7' : '#999',
                textDecorationLine: !delivered ? 'underline' : 'none',
                fontWeight: 'bold',
                fontSize: 12,
                textAlign: 'right',
              }}
            >
              Pendentes
            </TabText>
          </Tab>

          <Tab
            onPress={() => {
              deliveriesFilter(true);
            }}
          >
            <TabText
              style={{
                color: delivered ? '#7d40e7' : '#999',
                textDecorationLine: delivered ? 'underline' : 'none',
                fontWeight: 'bold',
                fontSize: 12,
                textAlign: 'right',
                paddingRight: 5,
              }}
            >
              Entregues
            </TabText>
          </Tab>
        </TabBar>
      </TabContainer>

      <List
        data={deliveries}
        refreshing={loading}
        onRefresh={loadPage}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item: data }) => <DeliveryCard data={data} />}
      />
    </Container>
  );
}
