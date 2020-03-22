import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  background: #fff;
  padding: 60px 30px;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0px 0px 10px #00000033;

  img {
    width: 258px;
    height: 44px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    input {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 45px;
      padding: 0 15px;
      color: #000;
      margin: 0 0 15px;

      &::placeholder {
        color: #999;
      }
    }

    span {
      color: #ff0000;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    label {
      color: #444;
      font-weight: bold;
      align-self: flex-start;
      margin: 0 0 9px;
    }

    button {
      margin: 5px 0 0;
      height: 45px;
      background: #7d40e7;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7d40e7')};
      }
    }
  }
`;
