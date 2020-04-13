import styled from 'styled-components/native';
import { Platform, StyleSheet, Dimensions } from 'react-native';
import Button from '~/components/Button';
import Input from '~/components/Input';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  /* padding: 20px 20px; */
  /* position: relative; */
  /* align-items: center; */
  /* padding: 10px; */
  /* margin-top: -70px; */
`;

export const Header = styled.View`
  height: ${Platform.OS === 'ios' ? 165 : 155}px;
  background: #7d40e7;
  padding: 15px;
  position: relative;
  padding-top: ${Platform.OS === 'ios' ? 45 : 25}px;
`;

export const Body = styled.View`
  flex: 1;
  align-items: center;
  padding: 10px;
  margin-top: -70px;
`;

export const Form = styled.ScrollView`
  height: 300px;
  margin-bottom: 20px;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  padding: 20px;
  height: 300px;
  border: 0;
  box-shadow: 0 0 3px #0000001a;

  background: #fff;
  border-radius: 4px;
  font-size: 18px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  background: #7d40e7;
`;

export const Card = styled.View`
  border-radius: 4px;
  padding: 10px 15px;
  align-self: stretch;
  background: #fff;
  border: 1px solid #fafafa;
  margin-bottom: 10px;
`;

export const HeaderCard = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #7d40e7;
  margin-left: 5px;
  font-weight: bold;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: #999;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
`;

export const DateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;

export const Date = styled.View``;

export const styles = StyleSheet.create({
  shadowBox: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
});

export const ActionContainer = styled.View`
  height: 85px;
  width: 100%;
  background: #f8f9fd;
  border-radius: 4px;
  box-shadow: 0 0 3px #0000001a;
  elevation: 3;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-around;
`;

export const TextAction = styled.Text`
  font-size: 11px;
  color: #999;
  line-height: 16px;
  text-align: center;
  width: 56px;
`;

export const ActionButton = styled.TouchableOpacity`
  height: 100%;
  width: ${(Dimensions.get('window').width - 20) / 3}px;
  align-items: center;
  justify-content: center;
  border-right-color: #0000001a;
  border-style: solid;
  border-right-width: 1px;
`;
