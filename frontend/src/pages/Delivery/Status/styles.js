import styled from 'styled-components';

export const Container = styled.td`
  span {
    background: ${({ background }) => background};
    color: ${({ color }) => color};
    font-size: 14px;
    font-weight: bold;
    position: relative;
    padding: 3px 7px 3px 25px;
    border-radius: 12px;
    svg {
      /* padding: 5px; */
      display: flex;
      align-items: center;
      justify-content: center;
      /* width: 110px;
      border-radius: 12px; */
    }
    /* &:before {
      content: '';
      position: absolute;
      height: 10px;
      width: 10px;
      left: 8px;
      top: 8px;
      background: ${({ background }) => background};
      border-radius: 50%;
    } */


  }
`;
