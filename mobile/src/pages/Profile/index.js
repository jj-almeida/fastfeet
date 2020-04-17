import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar, TouchableOpacity } from 'react-native';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Avatar, Label, Text, LogoutButton } from './styles';

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
          uri: profile.avatar
            ? `http://10.0.2.2:3333/files/${profile.avatar.path}`
            : `https://ui-avatars.com/api/?name=${profile.name}`,
        }}
      />

      <Label>Nome completo</Label>
      <Text>{profile.name}</Text>

      <Label>E-mail</Label>
      <Text>{profile.email}</Text>

      <Label>Data de cadastro</Label>
      <Text>{profile.registeredDate}</Text>

      <TouchableOpacity onPress={handleLogout}>
        <LogoutButton>Logout</LogoutButton>
      </TouchableOpacity>
    </Container>
  );
}
