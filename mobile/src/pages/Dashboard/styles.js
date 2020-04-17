import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px 20px;
  background: #fff;
`;

export const Header = styled.View`
  height: 100px;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 68px;
  width: 68px;
  border-radius: 34px;
`;

export const NameContainer = styled.View`
  flex: 1;
  margin: 0 12px;
`;

export const Welcome = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444;
`;

export const TabContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 22px;
  color: #444;
  font-weight: bold;
`;

export const TabBar = styled.View`
  flex-direction: row;
  align-items: center;
  position: relative;
  justify-content: space-between;
`;

export const Tab = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const TabText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  padding: 5px 5px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 10,
  },
})``;
