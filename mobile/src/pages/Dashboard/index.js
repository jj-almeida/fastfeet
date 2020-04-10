import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Header,
  Avatar,
  NameContainer,
  Welcome,
  Name,
  Body,
  TabContainer,
  TabBar,
  Title,
  Tab,
  TabText,
} from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

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
              ? profile.avatar.url
              : `https://avatars.dicebear.com/v2/initials/${profile.name}.svg`,
          }}
        />
        <NameContainer>
          <Welcome>Bem vindo de volta</Welcome>
          <Name>{profile.name}</Name>
        </NameContainer>

        <TouchableOpacity onPress={handleLogout}>
          <Icon name="exit-to-app" size={24} color="#E74040" size={30} />
        </TouchableOpacity>
      </Header>

      <Body>
        <TabContainer>
          <Title>Entregas</Title>

          <TabBar>
            {/* <Overlay style={{ transform: [{ translateX }] }} /> */}
            <Tab
            // onPress={() => handleSlide(0, xTabTwo, 'pending')}
            // onLayout={event => setXTabOne(event.nativeEvent.layout.x)}
            >
              <TabText style={{ color: '#7d40e7' }}>Pendentes</TabText>
            </Tab>

            <Tab
            // onPress={() => handleSlide(1, xTabOne, 'finish')}
            // onLayout={event => setXTabOne(event.nativeEvent.layout.x)}
            >
              <TabText style={{ color: '#999999' }}>Entregues</TabText>
            </Tab>
          </TabBar>
        </TabContainer>
      </Body>

      {/* <TopNavigation onChange={setActiveTab} /> */}

      {/* {activeTab === 'pending' ? <Pendings /> : <Deliveries />} */}
    </Container>
  );
}
