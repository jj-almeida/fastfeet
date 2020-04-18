import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  align-items: center;
  display: flex;

  input {
    width: 237px;
    height: 36px;
    font-size: 14px;
    padding: 10px 10px 10px 40px;
    border-radius: 4px;
    border: 1px solid #ddd;
    transition: box-shadow 0.1s, border-color 0.1s;

    &::placeholder {
      color: #999;
    }
  }
  svg {
    position: absolute;
    left: 10px;
  }
`;
