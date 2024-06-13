import styled from 'styled-components';
export const Container = styled.div`
  box-sizing: border-box;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: 375px) {
    width: 375px;
    height: 1011px;
    // padding: 0px 16px 48px 16px;
    padding: 0px 0px 48px 0px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 1076px;
    padding: 0px 32px 48px 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    height: 992px;
    padding: 0px 100px 48px 100px;
  }
`;
