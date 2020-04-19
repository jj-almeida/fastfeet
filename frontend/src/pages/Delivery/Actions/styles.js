import styled from 'styled-components';

export const Container = styled.td`
  position: relative;

  button {
    border: 0;
    background: none;
  }
`;

export const ActionList = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')} !important;
  position: absolute;
  right: -60px;
  border: 1px solid #eee;
  background: #fff;
  padding: 15px 10px;
  border-radius: 4px;
  z-index: 2;
  min-width: 150px;

  div {
    width: 100%;
    & + div {
      border-top: 1px solid #eee;
      margin-top: 5px;
      padding-top: 5px;
    }

    button,
    a {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #999;
      border: 0;
      background: none;

      svg {
        margin-right: 10px;
      }
    }
  }
`;

export const DetailContainer = styled.div`
  padding: 25px;
  width: 450px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #eee;

  strong {
    font-size: 14px;
    color: #444;
    font-weight: bold;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid #eee;

    p {
      margin-top: 7px;
      font-size: 16px;
      color: #666;

      span {
        font-weight: bold;
        margin-right: 5px;
      }
    }
  }

  img {
    text-align: center;
    align-self: center;
    margin-top: 5px;
    height: 150px;
    width: 300px;
    background: #eee;
  }
`;
