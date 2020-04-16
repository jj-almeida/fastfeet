import styled from 'styled-components';

import Button from '~/components/Button';

export const AddButton = styled(Button)`
  background: #7d40e7;
`;

export const Footer = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;
  }

  button {
    border: 0;
    background: none;
    margin: 0 20px;
  }
`;
