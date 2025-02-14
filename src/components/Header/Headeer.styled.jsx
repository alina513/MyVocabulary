import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88px;
  margin-right: auto;
  margin-left: auto;
  background-color: ${p => p.theme.colors.white};
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 80px;
    padding-right: 100px;
  }
`;
