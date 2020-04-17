import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { RNCamera } from 'react-native-camera';
import { Alert } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import {
  Container,
  Content,
  Header,
  Camera,
  SubmitButton,
  CameraView,
  CameraButton,
  Thumbnail,
} from './styles';

export default function ConfirmDelivery({ route }) {
  const { navigate } = useNavigation();

  const profile = useSelector((state) => state.user.profile);

  const data = route.params;

  const [camera, setCamera] = useState(null);
  const [file, setFile] = useState(null);

  async function handleTakePicture() {
    if (camera) {
      const options = {
        quality: 0.5,
        base64: false,
        width: 800,
      };
      const dataCamera = await camera.takePictureAsync(options);

      setFile(dataCamera);
    }
  }

  async function handleSubmit() {
    try {
      const dataFile = new FormData();
      dataFile.append('file', {
        uri: file.uri,
        name: 'signature.jpg',
        type: 'image/jpeg',
      });

      const fileResponse = await api.post('/files', dataFile);

      const { id } = fileResponse.data;

      const response = await api.put(
        `/deliverymans/${profile.id}/deliveriesend/`,
        {
          delivery_id: data.delivery_id,
          signature_id: id,
        }
      );

      navigate('Dashboard');
    } catch ({ response }) {
      Alert.alert('Falha!', response.data.error);
    }
  }

  return (
    <Container>
      <Header title="Confirmar entrega" />
      <Content>
        <CameraView>
          {file ? (
            <Thumbnail source={{ uri: file.uri }} />
          ) : (
            <Camera
              ref={(ref) => {
                setCamera(ref);
              }}
              type={RNCamera.Constants.Type.back}
              captureAudio={false}
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'OK',
                buttonNegative: 'Cancel',
              }}
            />
          )}

          {file ? (
            <CameraButton onPress={() => setFile(null)}>
              <Icon name="close" size={24} color="#fff" />
            </CameraButton>
          ) : (
            <CameraButton onPress={handleTakePicture}>
              <Icon name="camera" size={24} color="#fff" />
            </CameraButton>
          )}
        </CameraView>
        <SubmitButton onPress={handleSubmit}>Enviar </SubmitButton>
      </Content>
    </Container>
  );
}

ConfirmDelivery.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      delivery_id: PropTypes.number,
    }),
  }).isRequired,
};
