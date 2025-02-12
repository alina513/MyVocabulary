import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  height: 549px;
  border-radius: 30px;
  background-color: rgba(133, 170, 159, 0.1);
  padding: 32px 16px;
  margin-top: 211px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 350px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 628px;
    height: 592px;
    border-radius: 30px;
    background-color: rgba(133, 170, 159, 0.1);
    padding: 48px 64px;
    margin-top: 360px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 64px;
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
  margin-bottom: 16px;
  @media screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 150%;
    color: rgba(18, 20, 23, 0.8);
    width: 500px;
    margin-bottom: 32px;
  }
`;

export const Input = styled.input`
  display: flex;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${p => p.theme.colors.black};
  width: 288px;
  height: 56px;
  border-radius: 15px;

  border: 1px solid
    ${p =>
      p['data-is-valid']
        ? p.theme.colors.green
        : p['data-has-error']
        ? p.theme.colors.red
        : 'rgba(18, 20, 23, 0.1)'};

  background-color: rgba(133, 170, 159, 0.1);
  margin-bottom: 14px;
  padding-left: 16px;

  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.greenHover};
  }

  @media screen and (min-width: 768px) {
    box-sizing: border-box;
    display: flex;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: ${p => p.theme.colors.black};
    width: 500px;
    height: 56px;
    border-radius: 15px;

    border: 1px solid
      ${p =>
        p['data-is-valid']
          ? p.theme.colors.green
          : p['data-has-error']
          ? p.theme.colors.red
          : 'rgba(18, 20, 23, 0.1)'};

    background-color: rgba(133, 170, 159, 0.1);
    margin-bottom: 18px;
    padding-left: 18px;

    &:hover,
    &:focus {
      border-color: ${p => p.theme.colors.greenHover};
    }
  }
`;
export const NavLink = styled(Link)`
  display: block;
  width: 288px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
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
    width: 500px;
  }
`;

export const Button = styled.button`
  width: 288px;
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
