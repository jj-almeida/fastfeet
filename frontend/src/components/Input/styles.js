import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 5px;
  margin-bottom: 10px;

  input {
    margin: 7px 0;
    padding: 12px 15px;
    height: 45px;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #666;

    &::placeholder {
      color: #999;
    }
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: baseline;

  strong {
    font-size: 14px;
    color: #444444;
    font-weight: bold;
  }
`;
