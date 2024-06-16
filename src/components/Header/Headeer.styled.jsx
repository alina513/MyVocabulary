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
  margin-right: auto;
  margin-left: auto;
  background-color: white;
  padding-left: 16px;
  

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
  padding-right: 0px;
  }
  @media screen and (min-width: 1440px){
    width: 1440px;
    padding-left: 80px;
  padding-right: 100px;
    

  }
`;
