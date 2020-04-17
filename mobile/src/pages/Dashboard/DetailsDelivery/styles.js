import styled from 'styled-components/native';
import { Platform, Dimensions } from 'react-native';

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

export const Card = styled.View`
  border-radius: 4px;
  padding: 10px 15px;
  align-self: stretch;
  background: #fff;
  border: 2px solid #fff;
  margin-bottom: 10px;
  elevation: 3;
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
  text-transform: uppercase;
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

export const ActionContainer = styled.View`
  height: 85px;
  width: 100%;
  background: #f8f9fd;
  border-radius: 4px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-around;
  elevation: 3;
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
