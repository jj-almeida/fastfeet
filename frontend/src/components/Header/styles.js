import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 30px;
  background: #fff;
  border: solid 1px #ddd;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 26px;
      border-right: 1px solid #ddd;
      margin-right: 30px;
      padding-right: 30px;
    }
    a {
      font-size: 15px;
      color: #999;
      font-weight: bold;

      & + a {
        margin-left: 20px;
      }
      &:hover {
        opacity: 0.7;
      }
    }
    .selected {
      color: #444;
    }

    /* div { */
    /* display: flex;
      align-items: center; */

    /* a {
        color: #999;
        font-weight: bold;
        font-size: 15px;

        & + a {
          margin-left: 20px;
        }
      } */
    /* } */
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 30px;
  padding-left: 30px;

  div {
    text-align: right;
    margin-left: 10px;

    strong {
      display: block;
      color: #666;
      font-weight: bold;
      font-size: 14px;
    }

    a {
      display: block;
      margin-top: 5px;
      font-size: 14px;
      color: #de3b3b;
    }
  }
`;
