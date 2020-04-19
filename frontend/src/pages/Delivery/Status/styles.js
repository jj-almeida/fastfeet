import styled from 'styled-components';

export const Container = styled.td`
  div {
    color: ${({ color }) => color};
    background: ${({ background }) => background};
    font-size: 14px;
    font-weight: bold;
    border-radius: 12px;
    padding: 3px 6px;
    width: min-content;
  }
`;
