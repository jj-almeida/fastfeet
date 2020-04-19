import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 20px;

  thead th {
    font-size: 16px;
    text-align: left;
    color: #444;
    font-weight: bold;
    padding: 6px 20px 0;

    &:last-child {
      text-align: right;
    }
  }

  tbody td {
    height: 57px;
    padding: 6px 15px;
    border-radius: 4px;
    background: #fff;
    color: #666;
    font-size: 16px;

    &:last-child {
      text-align: right;
    }

    div {
      display: flex;
      align-items: center;

      img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
`;

export default Table;
