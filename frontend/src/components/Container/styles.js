import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1350px;
  margin: 34px auto;

  input {
    width: 237px;
    height: 36px;
    font-size: 14px;
    padding: 10px 10px 10px 40px;
    border-radius: 4px;
    border: 1px solid #ddd;

    &::placeholder {
      color: #999;
    }
  }

  > h2 {
    margin: 34px auto;
    font-size: 24px;
    color: #444;
    font-weight: bold;
  }

  > div {
    margin: 22px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      align-items: center;
      display: flex;
      position: relative;

      svg {
        position: absolute;
        margin-left: 16px;
      }
    }
  }
`;
