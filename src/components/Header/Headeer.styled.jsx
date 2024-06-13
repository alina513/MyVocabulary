import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  width: 375px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  // gap: 257px;
  justify-content: space-between;
  align-items: center;
  height: 88px;
  padding: 0px 0px;
  margin-right: auto;
  margin-left: auto;
  background-color: white;

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1440px){
    width: 1440px;

  }
`;
