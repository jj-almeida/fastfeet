import styled from 'styled-components';

export const Container = styled.td`
  div {
    color: ${({ color }) => color};
    background: ${({ background }) => background};
    border-radius: 12px;
    padding: 3px 6px;
    width: min-content;
    font-weight: bold;
  }
`;
