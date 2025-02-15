import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const Edit = styled.button`
display: flex;
width: 76px;
height: 24px;
font-weight: 500;
font-size: 16px;
line-height: 150%;
border: none;
background-color: transparent;
&:hover, &:focus {
    color: ${p => p.theme.colors.green};
    

`;

export const Delet = styled.button`
display: flex;
align-items: center;
width: 76px;
height: 24px;
font-weight: 500;
font-size: 16px;
line-height: 150%;
border: none;
background-color: transparent;
&:hover, &:focus {
    color: ${p => p.theme.colors.green};
    
`;

export const Svg = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

export const Content = styled.div`
// position: relative;
// width: 100%;
// height: 100%;
`
