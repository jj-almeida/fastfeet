import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RNCamera } from 'react-native-camera';

import Button from '~/components/Button';

export const Container = styled.View``;

export const Content = styled.View`
  padding: 20px;
  margin-top: -90px;
`;

export const Header = styled.View`
  height: ${Platform.OS === 'ios' ? 165 : 155}px;
  background: #7d40e7;
  padding: 15px;
  padding-top: ${Platform.OS === 'ios' ? 45 : 25}px;
`;

export const CameraView = styled.View`
  height: 445px;
  border-radius: 4px;
  margin-bottom: ${Platform.OS === 'ios' ? 12 : 22}px;
`;

export const Thumbnail = styled.Image`
  flex: 1;
`;

export const CameraButton = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  justify-content: center;
  align-self: center;
  background: rgba(0, 0, 0, 0.3);
  height: 60px;
  width: 60px;
  border-radius: 30px;
  bottom: 20px;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
`;

export const SubmitButton = styled(Button)`
  background: #7159c1;
`;
