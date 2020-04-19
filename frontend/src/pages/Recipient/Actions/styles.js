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
