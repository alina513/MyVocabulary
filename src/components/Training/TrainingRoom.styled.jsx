import styled from 'styled-components';

export const Container = styled.div`
display: block;
padding: 18px;
  background-color: #fff;
@media screen and (min-width: 768px) {
  width: 704px;
  height: 600px;
}
@media screen and (min-width: 1440px) {
margin-top: 16px;
  border-radius: 15px;
  padding: 18px;
  width: 1240px;
  height: 338px;
  background-color: #fff;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 80px;}
`;

export const ContainerInputUkr = styled.div`
width: 343px;
height: 195px;
@media screen and (min-width: 768px) {
  width: 668px;
height: 282px;
background-color: #fcfcfc;
}
@media screen and (min-width: 1440px) {
  border-right: 1px solid #dbdbdb;
  border-radius: 8px 0 0 0;
  padding: 22px 22px;
  width: 602px;
  height: 302px;
  background-color: #fcfcfc;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;}
`;
export const ContainerInputEng = styled.div`
width: 343px;
height: 195px;
@media screen and (min-width: 768px) {
  width: 668px;
height: 282px;
background-color: #fcfcfc;
}
@media screen and (min-width: 1440px) {
  bborder: 0px solid #dbdbdb;
  border-radius: 0 8px 8px 0;
  padding: 22px 22px;
  width: 602px;
  height: 302px;
  background-color: #fcfcfc;
  margin: auto;}
`;
export const WrapperLang = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
`;
export const Input = styled.input`
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  width: 177px;
  height: 30px;
  display: flex;
  border: none;
  background-color: transparent;
  color: ${p => p.theme.colors.black};
`;
export const ContainerLang = styled.div`
position: absolute;
top: 130px;
left: 250px;
display: flex;
gap: 8px;
align-items: center;
@media screen and (min-width: 768px){
  position: relative;
  top: 0px;
  left: 0px;
  display: flex;
  gap: 8px;
  align-items: center;}
`;
export const Lang = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
`;
export const Svg = styled.svg`
  width: 32px;
  height: 32px;
`;
export const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
`;
export const Next = styled.button`
margin-top: 106px;
border: none;
  background-color: transparent;
  font-weight: 500;
  font-size: 16px;
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  gap: 8px;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.green};
  }
@media screen and (min-width: 1440px) {
  margin-top: 0px;
border: none;
  background-color: transparent;
  font-weight: 500;
  font-size: 16px;
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  gap: 8px;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.green};
  }}
`;
export const SvgNext = styled.svg`
  width: 20px;
  height: 20px;
`;

export const ContainerButton = styled.div`
margin-right: auto;
margin-left: auto;
@media screen and (min-width: 768px) {
  width: 602px;
  display: flex;
  gap: 10px;
  margin-left: 25px;}
`;
export const Save = styled.button`
display: block;
margin-right: auto;
margin-left: auto;
border: 1px solid rgba(252, 252, 252, 0.4);
  border-radius: 30px;
  padding: 14px 80px;
  width: 343px;
  height: 56px;
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  background-color: ${p => p.theme.colors.green};
  color: ${p => p.theme.colors.white};
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.green};
    background-color: ${p => p.theme.colors.white};
    border: 1px solid #85aa9f;
  }
@media screen and (min-width: 768px) {
  border: 1px solid rgba(252, 252, 252, 0.4);
  border-radius: 30px;
  padding: 14px 80px;
  width: 203px;
  height: 56px;
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  background-color: ${p => p.theme.colors.green};
  color: ${p => p.theme.colors.white};
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.green};
    background-color: ${p => p.theme.colors.white};
    border: 1px solid #85aa9f;
  }}
  @media screen and (min-width: 1440px)  {
    margin-right: 10px;
    margin-left: 70px;
  }
`;

export const Cansel = styled.button`
margin-right: auto;
margin-left: auto;
border-radius: 30px;
  padding: 14px 71px;
  width: 363px;
  height: 56px;
  border: none;
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.green};
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.green};
  }
@media screen and (min-width: 768px) {
  border-radius: 30px;
  padding: 14px 71px;
  width: 203px;
  height: 56px;
  border: 1px solid #85aa9f;
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.green};
  margin-right: 10px;
  margin-left: 0px;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.green};
  }}
  
`;

export const Con = styled.div`
margin-right: 8px;
margin-left: auto;
  margin-top: 24px;
  width: 60px;
@media screen and (min-width: 768px) {
  margin-right: 100px;
  margin-left: auto;
  margin-top: 62px;
  width: 60px;}
`;
