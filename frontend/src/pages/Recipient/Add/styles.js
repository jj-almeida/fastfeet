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

export const AddressContainer1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  div:nth-child(1) {
    width: 520px;
  }

  div:nth-child(2) {
    width: 150px;
  }

  div:nth-child(3) {
    width: 140px;
  }
`;

export const AddressContainer2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  div {
    width: 270px;
  }
`;
