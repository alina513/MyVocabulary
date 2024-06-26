import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
  gap: 12px;
`;
export const Link = styled(NavLink)`
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.colors.black};
  &.active {
    background-color: ${p => p.theme.colors.green};
    width: 127px;
    height: 43px;
    border-radius: 15px;
    color: ${p => p.theme.colors.buttonWhite};
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.green};
  }
  &.active:hover,
  &.active:focus {
    color: ${p => p.theme.colors.black};
  }
`;
