import styled from 'styled-components';

export const Container = styled.button`
  background: #bbb;
  color: #fff;
  font-size: 14px;
  width: 142px;
  height: 36px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-transform: uppercase;
  border: 0;
  border-radius: 4px;
  padding: 6px 12px;
  margin-left: 12px;
  transition: opacity 0.1s;
  display: flex;

  svg {
    margin-right: 5px;
  }

  span {
    margin: 0;
    text-align: center;
  }

  &:hover {
    opacity: 0.8;
  }
`;
