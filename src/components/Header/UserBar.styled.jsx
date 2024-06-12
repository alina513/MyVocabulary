import styled from 'styled-components';

export const Name = styled.p`
  font-width: 500;
  font-size: 20px;
`;
export const Round = styled.div`
  background-color: ${p => p.theme.colors.green};
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
  background-color: ${p => p.theme.colors.buttonWhite};
  padding-left: 6px;
  font-width: 500;
  font-size: 16px;
  border: none;
  display: flex;
  align-items: center;
  gap: 6px;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.green};
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
`;
