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
display: block;
color: ${(p)=> p.theme.colors.black};
background-color: transparent;
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
display: block;
background-color: transparent;
`
export const Container = styled.div`
display: flex;
`

export const Radio = styled.input`
display: flex;
`
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

`
export const Label = styled.label`
font-weight: 400;
font-size: 16px;
text-align: center;
color: ${(p)=> p.theme.colors.black};
`
