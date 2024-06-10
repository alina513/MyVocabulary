import styled from "styled-components";
 
export const Container = styled.div`
margin-top: 136px;
border-radius: 15px;
padding: 18px;
width: 1240px;
height: 338px;
background-color: #fff;
display: flex;
margin-right: auto;
margin-left: auto;
margin-bottom: 80px;

`

export const  ContainerInputUkr = styled.div`
border-right: 1px solid #dbdbdb;
border-radius: 8px 0 0 0;
padding: 22px 22px;
width: 602px;
height: 302px;
background-color: #FCFCFC;
margin: auto;
display: flex;
flex-direction: column;
justify-content: space-between;
`
export const  ContainerInputEng = styled.div`
bborder: 0px solid #dbdbdb;
border-radius: 0 8px 8px 0;
padding: 22px 22px;
width: 602px;
height: 302px;
background-color: #FCFCFC;
margin: auto;
`
export const WrapperLang = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
`
export const Input = styled.input`
font-weight: 500;
font-size: 20px;
line-height: 150%;
width: 177px;
height: 30px;
display: flex;
border: none;
background-color: transparent;
color: ${(p)=> p.theme.colors.black};
`
export const ContainerLang = styled.div`
display: flex;
gap: 8px;
align-items: center;
`
export const Lang = styled.p`
font-weight: 500;
font-size: 16px;
line-height: 150%;
`
export const Svg = styled.svg`
width: 32px;
height: 32px;
`
export const Text = styled.p`
font-weight: 500;
font-size: 20px;
line-height: 150%;
`
export const Next = styled.button`
border: none;
background-color: transparent;
font-weight: 500;
font-size: 16px;
color: rgba(18, 20, 23, 0.5);
display: flex;
gap: 8px;
&:hover,
&:focus {
    color: ${(p)=> p.theme.colors.green};
}
`
export const SvgNext = styled.svg`
width: 20px;
height: 20px;
`

export const ContainerButton = styled.div`
display: flex;
gap: 10px;
margin-left: 100px;
`
export const Save = styled.button`
border: 1px solid rgba(252, 252, 252, 0.4);
border-radius: 30px;
padding: 14px 80px;
width: 203px;
height: 56px;
font-weight: 700;
font-size: 18px;
line-height: 156%;
background-color: ${(p)=> p.theme.colors.green};
color: ${(p)=> p.theme.colors.white};
&:hover, &:focus {
    color: ${(p)=> p.theme.colors.green};
    background-color: ${(p)=> p.theme.colors.white};
    border: 1px solid #85AA9F;
}
`

export const Cansel = styled.button`
border-radius: 30px;
padding: 14px 71px;
width: 203px;
height: 56px;
border: 1px solid #85AA9F;
font-weight: 700;
font-size: 18px;
line-height: 156%;
background-color: ${(p)=> p.theme.colors.white};
color: ${(p)=> p.theme.colors.green};
margin-right: 10px;
&:hover, &:focus {
    color: ${(p)=> p.theme.colors.white};
    background-color: ${(p)=> p.theme.colors.green};
}
`

