import styled from 'styled-components';

export const Input = styled.input`
  margin-bottom: 8px;
  box-sizing: border-box;
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 15px;
  padding: 12px 24px;
  width: 343px;
  height: 48px;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  display: block;
  color: ${p => p.theme.colors.black};
  background-color: #ffffff;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    width: 274px;
    height: 48px;
  }
`;

export const Select = styled.select`
  box-sizing: border-box;
  display: flex;
  width: 343px;
  height: 48px;
  padding: 12px 24px;
  @media screen and (min-width: 768px) {
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 15px;
    padding: 12px 24px;
    width: 164px;
    height: 48px;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: ${p => p.theme.colors.black};
    margin-left: 8px;
    display: block;
    background-color: #ffffff;
  }
`;
export const Container = styled.div`
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 28px;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
    margin-left: 80px;
  }
`;

export const Radio = styled.input.attrs({ type: 'radio' })`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 24px;
  height: 24px;
  font-size: 16px;
  line-height: 22px;
  color: ${p => p.theme.colors.black};
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid rgba(18, 20, 23);
  appearance: none;

  &:checked {
    background-color: green;
    color: ${p => p.theme.colors.black};
    border: 2px solid ${p => p.theme.colors.green};
    background-clip: content-box;
    padding: 3px;
    background-color: ${p => p.theme.colors.green};
  }
`;
export const RadioContainer = styled.div`
  box-sizing: border-box;
  height: 48px;
  padding: 12px 0px;
  display: flex;
  gap: 16px;
  gap: 16px;
  margin-bottom: 22px;
  margin-top: 8px;
  margin-left: 8px;
  align-items: center;
`;
export const Label = styled.label`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: ${p => p.theme.colors.black};
`;
