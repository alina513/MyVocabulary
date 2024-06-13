import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  margin-top: 32px;
  margin-left: 16px;
  @media screen and (min-width: 768px) {
    margin-left: 32px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1240px;
    margin-right: auto;
    margin-left: auto;
  }
`;
export const ContainerStat = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;
