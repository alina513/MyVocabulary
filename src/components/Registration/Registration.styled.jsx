import styled from 'styled-components';
import bg1x from '../../assets/background/bg-1x.png';
import bgmob from '../../assets/background/bgmobile.png';

export const Wrapper = styled.div`
  box-sizing: border-box;
  background-color: ${p => p.theme.colors.white};
  width: 100vw;
  height: 100vh;
  padding-top: 16px;

  background-image: url(${bgmob});
  background-size: content, cover;
  background-repeat: no-repeat;
  background-position: 70px 70px;
  position: relative;

  @media screen and (min-width: 768px) {
    background-image: none;
  }

  @media screen and (min-width: 1440px) {
    box-sizing: border-box;
    display: flex;
    background-color: ${p => p.theme.colors.white};
    width: 100vw;
    height: 100vh;
    padding: 24px 134px 104px 100px;

    // box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    background-image: url(${bg1x});
    // background-size: 28%;
    background-size: content, cover;
    background-repeat: no-repeat;
    background-position: 820px 170px;
    position: relative;
  }
`;
export const Logo = styled.div`
display: flex;
align-items: center;
gap: 16px;
margin-left: 16px;
@media screen and (min-width: 1440px){
display: flex;
align-items: center;
margin-left: 0px;
gap: 16px;
// margin-bottom: 64px;}

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
  font-size: 18px;
  line-height: 133%;
  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 22px;
    line-height: 145%;
  }
`;

export const List = styled.ul`
  display: none;

  gap: 10px;

  @media screen and (min-width: 768px) {
    display: flex;
    margin-top: 98px;
    margin-left: 167px;
    margin-top: 570px;
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
