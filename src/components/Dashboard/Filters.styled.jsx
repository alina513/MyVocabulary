import styled from "styled-components";

export const Input = styled.input`
box-sizing: border-box;
border: 1px solid rgba(18, 20, 23, 0.1);
border-radius: 15px;
padding: 12px 24px;
width: 274px;
height: 48px;
font-weight: 500;
font-size: 16px;
line-height: 150%;
color: ${(p)=> p.theme.colors.black};
`

export const Select = styled.select`
border: 1px solid rgba(18, 20, 23, 0.1);
border-radius: 15px;
padding: 12px 24px;
width: 164px;
height: 48px;
font-weight: 500;
font-size: 16px;
line-height: 150%;
color: ${(p)=> p.theme.colors.black};
margin-left: 8px;
`