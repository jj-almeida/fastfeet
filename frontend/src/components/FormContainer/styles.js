import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  min-width: 900px;
  margin: 27px auto;
  padding: 0 100px;

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
`;
