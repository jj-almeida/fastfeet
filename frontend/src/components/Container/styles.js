import styled from 'styled-components';

export const Content = styled.div`
  max-width: 800px;
  margin: 27px auto;
  span {
    color: #fb6f91;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }
  header {
    display: flex;
    align-self: stretch;
    align-items: center;
    justify-content: space-between;
    h2 {
      font-size: 24px;
      color: #444444;
      font-weight: bold;
    }
    div {
      display: flex;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    flex: 1;
    background: #fff;
    border-radius: 4px;
    padding: 30px;
    margin-top: 20px;

    input {
      border: 1px solid #ddd;
      padding: 0 15px;
      height: 45px;
      border-radius: 4px;
      color: #fff;
      margin: 7px 0;
      &::placeholder {
        color: #999;
        font-size: 16px;
      }
    }
    label {
      text-align: left;
      font-weight: bold;
      font-size: 14px;
      color: #444;
    }
  }
`;
