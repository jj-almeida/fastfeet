import styled from 'styled-components';

export const Container = styled.td`
  position: relative;
  button {
    background: none;
    border: 0;
  }
`;

export const ActionList = styled.div`
  position: absolute;
  right: -63px;
  z-index: 2;
  box-shadow: 0px 0px 2px #00000026;
  background: #fff;
  padding: 15px 10px;
  border-radius: 4px;
  min-width: 150px;
  white-space: nowrap;
  margin-top: 5px;
  display: ${props => (props.visible ? 'block' : 'none')} !important;
  flex-direction: column;
  &::before {
    content: '';
    position: absolute;
    left: calc(50% + 3px);
    top: -8px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #f1f1f1;
  }
  div {
    width: 100%;
    & + div {
      border-top: 1px solid #eee;
      margin-top: 5px;
      padding-top: 5px;
    }
    button,
    a {
      border: 0;
      background: none;
      color: #999;
      font-size: 16px;
      display: flex;
      align-items: center;
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
    margin-top: 5px;
    height: 150px;
    width: 300px;
    align-self: center;
    text-align: center;
    background: #eee;
  }
`;
