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
export const Table = styled.table`
width: 1204px;
margin-right: auto;
margin-left: auto;
border-collapse: collapse;
border-radius: 8px; /* Додаємо бордер-радіус */
  overflow: hidden; /* Щоб бордер-радіус був видимий */
  box-shadow: 0 0 0 1px ${(p) => p.theme.colors.white}; /* Прибираємо зовнішній бордер */
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
padding: 22px 22px 22px 22px;
height: 72px;
background-color: rgba(133, 170, 159, 0.1);
font-weight: 500;
font-size: 20px;
color: ${(p)=> p.theme.colors.black};
`

export const Tr = styled.tr`
// border-bottom: 1px solid #dbdbdb;
// border: 1px solid #dbdbdb;
// padding: 22px 22px 22px 22px;
// height: 72px;
// font-weight: 500;
// font-size: 20px;
// &:last-child td {
//     border-bottom: none; /* Прибираємо нижній бордер у останнього рядка */
//   };
&:last-child td {
    border-bottom: none; /* Прибираємо нижній бордер у останнього рядка */
  };
  background-color: #FCFCFC;

`

export const Td = styled.td`
// border: 1px solid #dbdbdb;
// padding-left: 22px;
// &:last-child {
//     border-right: none; /* Прибираємо правий бордер у останньої комірки в рядку */
//   }

border-bottom: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  padding: 22px;

  &:last-child {
    border-right: none; /* Прибираємо правий бордер у останньої комірки в рядку */
  }
`
export const Button = styled.button`
border: none;
background-color: transparent;
`

export const Svg = styled.svg`
width: 32px;
height: 32px;
`
export const Hidden = styled.span`
display: none;
`