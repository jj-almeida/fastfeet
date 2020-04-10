import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StatusBar } from 'react-native';
import { Container, Avatar, Label, Text, LogoutButton } from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Avatar
        source={{
          uri: profile.avatar.url
            ? profile.avatar.url
            : `https://avatars.dicebear.com/v2/initials/${profile.name}.svg`,
        }}
      />

      <Label>Nome completo</Label>
      <Text>{profile.name}</Text>

      <Label>E-mail</Label>
      <Text>{profile.email}</Text>

      <Label>Data de cadastro</Label>
      <Text>{profile.registeredDate}</Text>

      <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
    </Container>
  );
}
