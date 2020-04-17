import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 4px;
  background: #fff;
  border: 2px solid #eee;
  margin-bottom: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #7d40e7;
  font-weight: bold;
  margin-left: 10px;
`;

export const Body = styled.View`
  padding: 15px 0;
`;

export const Footer = styled.View`
  flex-direction: row;
  background: #f8f9fd;
  padding: 20px;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Content = styled.View``;

export const Label = styled.Text`
  font-size: 10px;
  color: #999;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #444;
  font-weight: bold;
`;

export const DetailButton = styled.TouchableOpacity``;

export const DetailButtonText = styled.Text`
  font-size: 14px;
  color: #7d40e7;
  font-weight: bold;
`;
