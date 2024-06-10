import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Button = styled.button`
display: flex;
align-items: center;
gap: 2px;
font-weight: 500;
font-size: 16px;
line-height: 150%;
border: none;
color: ${(p) => p.theme.colors.black};
// background-color: ${(p) => p.theme.colors.buttonWhite};
background-color: transparent;
&:hover,
&:focus {
    color: ${(p)=> p.theme.colors.green}
}
`

export const Link = styled(NavLink)`
display: flex;
align-items: center;
gap: 2px;
font-weight: 500;
font-size: 16px;
line-height: 150%;
color: ${(p) => p.theme.colors.black};
&:hover,
&:focus {
    color: ${(p)=> p.theme.colors.green}
}
`
export const Svg = styled.svg`
width: 20px;
height: 20px;
`