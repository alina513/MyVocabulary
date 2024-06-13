import styled from 'styled-components';
import bgmob from "../../assets/background/bgmobile.png";
import { NavLink } from 'react-router-dom';

export const MainDiv = styled.div`

  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 40%;
  background-color: #85AA9F;
  color: white;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  padding: 20px 20px;
  z-index: 1000;

  /* transform: translateY(-498px);
  visibility: hidden;
  
  transform: none;
  transition: transform 225ms cubic-bezier(0.17, 0.67, 0.83, 0.67) 0ms; */

  overflow: hidden;

  background-image: url(${bgmob});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 0px 500px;

  @media (min-width: 768px) {
    padding: 32px 32px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  top: 20px;
  right: 20px;
`;

export const Name = styled.p`
  font-width: 500;
  font-size: 20px;
  color: ${p => p.theme.colors.white};

`;
export const Round = styled.div`
  background-color: ${p => p.theme.colors.white};
  border-radius: 30px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Avatar = styled.svg`
  width: 24px;
  height: 24px;
`;


export const Logout = styled.button`
width: 127px;
  background-color: ${p => p.theme.colors.green};
  color: ${p => p.theme.colors.white};
  padding-left: 6px;
  font-width: 500;
  font-size: 16px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.black};
  }
`;
export const Svg = styled.svg`
  width: 16px;
  height: 16px;
`;
export const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 170px;
`;
export const Link = styled(NavLink)`
padding: 0px;
width: 127px;
display: flex;
align-items: center;
justify-content: center;
  font-width: 500;
  font-size: 14px;
  margin-bottom: 28px;
  color: ${p => p.theme.colors.white};
  &.active {
    background-color: ${p => p.theme.colors.white};
    width: 127px;
    height: 43px;
    border-radius: 15px;
    color: ${p => p.theme.colors.black};
  }

  &:hover,
  &:focus {
    color: blue;
  }
`;