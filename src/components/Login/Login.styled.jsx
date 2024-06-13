import styled from 'styled-components';
import bg1x from '../../assets/background/bg-1x.png';
import bgmob from '../../assets/background/bgmobile.png';

export const MainContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 375px) {
    display: block;
    width: 375px;
    height: 1011px;
    padding: 0px 16px 48px 16px;
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

export const Wrapper = styled.div`
  box-sizing: border-box;
  background-color: ${p => p.theme.colors.white};
  width: 100%;
  height: 100%;
  padding-top: 16px;
  margin-right: auto;
  margin-left: auto;

  background-image: url(${bgmob});
  background-size: content, cover;
  background-repeat: no-repeat;
  background-position: 70px 70px;
  position: relative;

  @media screen and (min-width: 768px) {
    background-image: none;
    box-sizing: border-box;
    // display: flex;
    background-color: ${p => p.theme.colors.white};
    // padding: 24px 134px 104px 100px;
  }

  @media screen and (min-width: 1440px) {
    box-sizing: border-box;
    display: flex;
    background-color: ${p => p.theme.colors.white};
    padding: 24px 100px 100px 100px;

    // box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    background-image: url(${bg1x});
    background-size: 33%;
    background-repeat: no-repeat;
    background-position: 780px 190px;
    position: relative;
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 16px;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-left: 32px;
    gap: 16px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 0px;
  }
`;
export const Svg = styled.svg`
  width: 36px;
  height: 36px;
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 145%;
`;

export const List = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 10px;
    margin-top: 172px;
    margin-left: 160px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 570px;
    margin-left: 87px;
  }
`;

export const ItemText = styled.li`
  &:not(:first-child) {
    list-style-type: disc;
  }
  font-size: 16px;
  line-height: 150%;
  padding-left: 5px;
  padding-right: 10px;
`;
