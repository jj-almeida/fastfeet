import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  height: ${Platform.OS === 'ios' ? 165 : 155}px;
  padding-top: ${Platform.OS === 'ios' ? 45 : 25}px;
  background: #7d40e7;
`;

export const Body = styled.View`
  flex: 1;
  align-items: center;
  padding: 10px 12px;
  margin-top: -70px;
`;

export const Form = styled.ScrollView``;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  padding: 20px;
  height: 300px;
  border: 1px solid #eee;
  background: #fff;
  border-radius: 4px;
  font-size: 18px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  background: #7d40e7;
`;
