import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 5px;
  margin-bottom: 10px;

  .react-select__control {
    border: 1px solid #ddd;
  }

  input {
    margin: 7px 0;
    padding: 12px 15px;
    border-radius: 4px;
    color: #666;

    &::placeholder {
      color: #999;
    }
  }
`;

export const Label = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 7px;

  strong {
    font-size: 14px;
    color: #444;
  }
`;
