import styled from 'styled-components';
import Button from '~/components/Button';

export const BackButton = styled(Button)`
  background: #ccc;
  width: 112px;
`;

export const SaveButton = styled(Button)`
  background: #7d40e7;
  width: 112px;
`;

export const NameContainer = styled.div`
  display: flex;

  > div {
    flex: 1;
    margin-bottom: 20px;

    & + div {
      margin-left: 30px;
    }
  }
`;
