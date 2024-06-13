import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  max-width: 902px;
  margin-top: 193px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  display: flex;
  gap: 32px;
  padding: 10px;
  @media screen and (max-width: 767px) {
    max-width: 581px;
    margin-top: 140px;
    flex-direction: column-reverse;
  }
`;

export const BtnWrapper = styled.div`
display: block;
margin-left: auto;
  margin-right: auto;
@media screen and (min-width: 767px) {
  display: flex;
  gap: 10px;}
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: ${p => p.theme.colors.black};
  margin-bottom: 32px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${p => p.theme.colors.black};
  margin-bottom: 64px;
`;

export const Img = styled.img`
  display: block;
  margin: 0 auto;
`;

export const Btn = styled.button`   cursor: pointer;
        width: 203px;
        height: 56px;
        margin-top: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 14px;
        background-color: ${p => p.theme.colors.green};
        color: ${p => p.theme.colors.white};
        border: none;
        border-radius: 30px;
      
        font-size: 18px;
        font-weight: 600;
        line-height: 28px;
      }
      
      &:hover,
      &:focus {
        background-color: ${p => p.theme.colors.white};
        color: ${p => p.theme.colors.black};
        border: 1px solid  ${p => p.theme.colors.green};
      `;

export const BtnCancel = styled(Link)`
      box-sizing: border-box;
            cursor: pointer;
            width: 203px;
            height: 56px;
            margin-top: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 14px;
            background-color: transparent;
            color: ${p => p.theme.colors.black};
            border-radius: 30px;
            border: 1px solid ${p => p.theme.colors.green};
            font-size: 18px;
            font-weight: 600;
            line-height: 28px;
          }
          
          &: hover, &: focus {
            color:${p => p.theme.colors.green};
          `;
