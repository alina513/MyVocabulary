import styled from "styled-components";
import bg1x from '../../assets/background/bg-1x.png'

export const Wrapper = styled.div`
box-sizing: border-box;
background-color: ${(p) => p.theme.colors.white};
width: 100vw;
height: 100vh;

box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
background-image: url(${bg1x});
// linear-gradient( 292deg, rgba(133, 170, 159, 0.51) 0%, rgba(255, 255, 255, 0) 100%);

background-repeat: no-repeat;
background-position:  right;
`
