import styled from "styled-components";

export const Wrapper = styled.div`
background-color: ${(p)=> p.theme.colors.white};
border-radius: 15px;
padding: 18px;
width: 1240px;
height: 640px;
margin-right: auto;
margin-left: auto;
padding: 18px;
margin-top: 37px;
`
export const Container = styled.div`
width: 1240px;
height: 540px;
`

export const Table = styled.table`
width: 1240px;
height: 540px;
margin-right: auto;
margin-left: auto;
border-collapse: collapse;
border-radius: 8px; 
  overflow: hidden; 
  box-shadow: 0 0 0 1px ${(p) => p.theme.colors.white}; 
`
export const Span = styled.span`
display: flex;
align-items: center;
justify-content: space-between;
`

export const Th = styled.th`
border-bottom: 1px solid #dbdbdb;
border-right: 1px solid #dbdbdb;
text-align: left;
padding: 0px 22px 0px 22px;
height: 72px;
background-color: rgba(133, 170, 159, 0.1);
font-weight: 500;
font-size: 20px;
color: ${(p)=> p.theme.colors.black};
`

export const Tr = styled.tr`
height: 80px;
&:last-child td {
    border-bottom: none; 
  };
  background-color: #FCFCFC;

`

export const Td = styled.td`
font-weight: 500;
font-size: 20px;
color: ${(p)=> p.theme.colors.black};

border-bottom: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  padding:  15px 22px 15px 22px;

  &:last-child {
    border-right: none; /* Прибираємо правий бордер у останньої комірки в рядку */
  }
`
export const Button = styled.button`
border: none;
background-color: transparent;
&:hover,
&:focus {
    color: ${(p)=> p.theme.colors.green}
}
`

export const Svg = styled.svg`
width: 32px;
height: 32px;
`
export const Hidden = styled.span`
display: none;
`
export const SvgAdd = styled.svg`
width: 20px;
height: 20px;
`

export const SpanAdd = styled.span`
font-weight: 500;
font-size: 16px;
display: flex;
align-items: center;
gap: 8px;
`
export const ButtonAdd = styled.button`
font-weight: 500;
font-size: 20px;
color: ${(p)=> p.theme.colors.black};
border: none;
background-color: transparent;
display: block;
&:hover,
&:focus {
    color: ${(p)=> p.theme.colors.green}
}
`