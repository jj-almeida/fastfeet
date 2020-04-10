import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 2px;
  height: 46px;
  border-radius: 4px;
  border: 2px solid #ddd;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.2)',
})`
  flex: 1;
  font-size: 14px;
  color: #000;
`;
