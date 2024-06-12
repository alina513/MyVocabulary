import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  @media screen and (min-width: 1440px) {
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
