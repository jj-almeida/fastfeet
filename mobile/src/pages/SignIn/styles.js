import styled from 'styled-components/native';
import { Platform } from 'react-native';

import BackgroundDefault from '~/components/Background';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Background = styled(BackgroundDefault)`
  background: #7d40e7;
`;

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'paddding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
  background: #fff;
  color: #715;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;
