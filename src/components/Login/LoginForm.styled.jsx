import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  box-sizing: border-box;
  width: 375px;
  height: 479px;
  border-radius: 30px;
  background-color: rgba(133, 170, 159, 0.1);
  padding: 32px 18px;
  margin-top: 333px;

  @media screen and (min-width: 768px) {
    width: 628px;
    height: 592px;
    padding: 48px 64px;
    margin-top: 114px;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 30px;
  line-height: 107%;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.black};
  margin-bottom: 16px;

  @media screen and (min-width: 1440px) {
    font-weight: 600;
    font-size: 40px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.black};
    margin-bottom: 20px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: rgba(18, 20, 23, 0.8);
  margin-bottom: 40px;
  @media screen and (min-width: 1440px) {
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: rgba(18, 20, 23, 0.8);
    width: 500px;
    margin-bottom: 32px;
  }
`;

export const Input = styled.input`
  width: 343px;
  height: 56px;
  margin-bottom: 14px;
  padding-left: 18px;
  box-sizing: border-box;
  display: flex;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${p => p.theme.colors.black};

  border-radius: 15px;

  border: 1px solid
    ${p =>
      p['data-is-valid']
        ? p.theme.colors.green
        : p['data-has-error']
        ? p.theme.colors.red
        : 'rgba(18, 20, 23, 0.1)'};

  background-color: rgba(133, 170, 159, 0.1);

  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.greenHover};
  }

  @media screen and (min-width: 768px) {
    width: 500px;
    height: 56px;
    margin-bottom: 18px;
    padding-left: 18px;
  }
`;
export const NavLink = styled(Link)`
  display: block;
  margin-left: 140px;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: rgba(18, 20, 23, 0.5);
  &:hover,
&: focus {
    color: ${p => p.theme.colors.black};
  }

  @media screen and (min-width: 768px) {
    margin-left: 229px;
  }
`;

export const Button = styled.button`
  width: 343px;
  height: 56px;
  display: flex;
  background-color: ${p => p.theme.colors.green};
  color: ${p => p.theme.colors.buttonWhite};
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: none;
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  margin-bottom: 16px;
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.greenHover};
  }

  @media screen and (min-width: 768px) {
    width: 500px;
    height: 60px;
    margin-bottom: 16px;
  }
`;

export const SuccessMessage = styled.span`
  color: ${p => p.theme.colors.green};
`;

export const ErrorMessage = styled.span`
  color: ${p => p.theme.colors.red};
`;

export const Wrapper = styled.div`
  position: relative;
`;
export const Svg = styled.svg`
  width: 20px;
  height: 20px;
`;
export const BtnEye = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  position: absolute;
  top: 25%;
  right: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
