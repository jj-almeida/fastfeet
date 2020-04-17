import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  height: ${Platform.OS === 'ios' ? 165 : 155}px;
  padding-top: ${Platform.OS === 'ios' ? 45 : 25}px;
  background: #7d40e7;
`;

export const Title = styled.Text`
  bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
`;

export const Body = styled.View`
  flex: 1;
  align-items: center;
  padding: 10px 12px;
  margin-top: -70px;
`;

export const Card = styled.View`
  border-radius: 4px;
  padding: 10px 10px;
  background: #fff;
  border: 1px solid #eee;
  margin-bottom: 10px;
  height: 55px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  elevation: 1;
`;

export const Problem = styled.Text`
  margin-right: 10px;
`;
export const Date = styled.Text``;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 10,
  },
})``;
