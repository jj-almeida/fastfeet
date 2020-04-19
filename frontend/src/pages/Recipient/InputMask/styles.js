import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  flex: 1;
  margin: 5px;

  input {
    border: 1px solid #ddd;
    padding: 12px 15px;
    height: 45px;
    border-radius: 4px;
    color: #666;
    margin: 7px 0;

    &::placeholder {
      color: #999;
    }
  }
`;

export const Label = styled.div`
  display: flex;
  align-items: baseline;

  strong {
    font-size: 14px;
    color: #444444;
  }
`;
