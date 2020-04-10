import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 36px;
  justify-content: center;
  align-content: center;
`;

export const Avatar = styled.Image`
  height: 138px;
  width: 138px;
  border-radius: 69px;
  background: #f4effc;
  align-self: center;
  margin-bottom: 40px;
  /* border: 2px #eee; */
`;

export const Label = styled.Text`
  padding-top: 20px;
  color: #666;
  font-size: 12px;
`;

export const Text = styled.Text`
  padding-top: 5px;
  color: #444;
  font-size: 22px;
  font-weight: bold;
`;

export const LogoutButton = styled(Button)`
  margin-top: 30px;
  width: 100%;
  height: 40px;
  background: #e74040;
  color: #fff;
`;
