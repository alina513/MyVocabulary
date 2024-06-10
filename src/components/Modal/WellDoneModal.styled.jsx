import styled from "styled-components";
import openBook from "../../assets/background/openbook.png"

export const Title = styled.h2`
font-weight: 600;
font-size: 40px;
line-height: 120%;
letter-spacing: -0.02em;
text-align: center;
color: ${(p) => p.theme.colors.white};
margin-bottom: 28px;
`

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
`
export const WrapperRes = styled.div`
`
export const Desc = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: rgba(252, 252, 252, 0.5);
margin-bottom: 8px;
`
export const Item = styled.li`
font-weight: 500;
font-size: 20px;
color: ${(p) => p.theme.colors.white};
margin-bottom: 4px;
`
export  const ButtonClose = styled.button`
margin-left: auto;
background-color: transparent;
  display: block;
  border: none;
  position: absolute;
  right: -28px;
  top: -28px;
`
export const Close = styled.svg`
width: 32px;
height: 32px;
`
export const Container = styled.div`
width: 100%;
height: 100%;
position: relative;
background-color: ${(p) => p.theme.colors.green};
background-image: url(${openBook});
background-size: content;
background-repeat: no-repeat;
background-position:  230px 250px;

`