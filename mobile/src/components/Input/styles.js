import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 5px;
  height: 46px;
  /* background: rgba(255, 255, 255, 0.9); */
  border-radius: 4px;
  border: 2px solid #ddd;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.2)',
})`
  flex: 1;
  font-size: 15px;
  color: #fff;
`;
