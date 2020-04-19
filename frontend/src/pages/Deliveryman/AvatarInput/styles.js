import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 2px dashed #ddd;

      strong {
        margin-top: 5px;
        color: #ddd;
      }
    }

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 1px solid #ddd;
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
