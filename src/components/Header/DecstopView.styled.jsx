import styled from 'styled-components';

export const Name = styled.p`
  font-width: 500;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-width: 500;
    font-size: 20px;
  }
`;
export const Round = styled.div`
  background-color: ${p => p.theme.colors.green};
  border-radius: 30px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    background-color: ${p => p.theme.colors.green};
    border-radius: 30px;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Avatar = styled.svg`
  width: 13px;
  height: 13px;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const Svg = styled.svg`
  width: 32px;
  height: 22px;
  stroke: black;
  fill: black @media screen and (min-width: 768px) {
    width: 40px;
    height: 28px;
    stroke: black;
    fill: black;
  }
`;
export const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ButClose = styled.button`
  border: none;
  background-color: transparent;
`;
