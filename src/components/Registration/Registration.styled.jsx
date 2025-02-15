import styled from 'styled-components';
import bg1x from '../../assets/background/bg-1x.png';
import bgmob from '../../assets/background/bgmobile.png';

export const Wrapper = styled.div`
  background-color: ${p => p.theme.colors.white};
  width: 100%;
  height: 100%;
  padding-top: 16px;

  background-image: url(${bgmob});
  background-size: content, cover;
  background-repeat: no-repeat;
  background-position: 70px 70px;
  position: relative;

  @media screen and (min-width: 350px) {
    width: 350px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    background-size: 60%;
    background-position: center 70px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    background-color: ${p => p.theme.colors.white};
    width: 1440px;
    padding: 24px 134px 104px 100px;

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
gap: 6px;
margin-left: 16px;
@media screen and (min-width: 768px){
gap: 16px;
}
@media screen and (min-width: 1440px){
display: flex;
align-items: center;
margin-left: 0px;}

`;
export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 16px;
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
    margin-top: 28px;
    justify-content: center;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
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
