import styled from 'styled-components';

export const Wrapper = styled.form`
  color: ${p => p.theme.colors.white};
  position: relative;
  padding: 48px 21px;
  width: 342px;
  height: 512px;
  background-color: #85aa9f;
  border-radius: 30px;
  @media screen and (min-width: 768px) {
    padding: 48px 64px;
    width: 627px;
    height: 345px;
  }
  @media screen and (min-width: 1440px) {
    padding: 48px 64px;
    width: 627px;
    height: 345px;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  ont-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: rgba(252, 252, 252, 0.8);
  margin-bottom: 32px;
`;
export const Select = styled.select`
  box-sizing: border-box;
  display: flex;
  border: 1px solid rgba(252, 252, 252, 0.3);
  border-radius: 15px;
  padding: 12px 24px;
  width: 204px;
  height: 48px;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  background-color: ${p => p.theme.colors.green};
  color: ${p => p.theme.colors.white};
`;
export const Input = styled.input`
  display: flex;
  box-sizing: border-box;
  border: 1px solid rgba(252, 252, 252, 0.3);
  border-radius: 15px;
  width: 300px;
  height: 56px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  background-color: ${p => p.theme.colors.green};
  color: ${p => p.theme.colors.white};
  @media screen and (min-width: 768px) {
    width: 354px;
    padding: 16px 246px 16px 18px;
  }
`;
export const Lang = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
`;
export const AddButton = styled.button`
  border-radius: 30px;
  padding: 12px 60px;
  width: 158px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.black};
  margin-right: 10px;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.green};
  }
  @media screen and (min-width: 768px) {
    width: 245px;
    height: 56px;
    padding: 14px 104px;
  }
`;
export const CancelButton = styled.button`
  border: 1px solid rgba(252, 252, 252, 0.4);
  border-radius: 30px;
  padding: 12px 60px;
  width: 158px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  background-color: ${p => p.theme.colors.green};
  color: ${p => p.theme.colors.white};
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.black};
    background-color: ${p => p.theme.colors.white};
  }
  @media screen and (min-width: 768px) {
    width: 245px;
    height: 56px;
    padding: 14px 92px;
  }
`;
export const ButtonClose = styled.button`
  margin-left: auto;
  background-color: #85aa9f;
  display: block;
  border: none;
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const Close = styled.svg`
  width: 32px;
  height: 32px;
`;

export const Radio = styled.input``;
export const RadioContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 22px;
  margin-top: 8px;
`;
export const Label = styled.label`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: ${p => p.theme.colors.white};
`;

export const SvgLang = styled.svg`
  width: 32px;
  height: 32px;
`;

export const ContainerLang = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 10px;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    margin-left: 32px;
    margin-bottom: 0px;
    margin-top: 0px;
  }
`;

export const InputContainer = styled.div`
  display: block;
  margin-top: 16px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
    margin-top: 32px;
  }
`;

export const RadioText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 117%;
  color: ${p => p.theme.colors.white};
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;
