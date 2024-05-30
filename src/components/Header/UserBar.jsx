import sprite from '../../assets/sprite.svg'
import { Avatar, Name, Logout, Round, Svg, Container } from "./UserBar.styled"
export const UserBar = () => {
return(
    <Container>
    <Name>Irina</Name>
    <Round>
    <Avatar><use xlinkHref={sprite + '#icon-avatar'}></use></Avatar>
    </Round>
    <Logout>Logout</Logout>
    <Svg><use xlinkHref={sprite + '#icon-arrow'}></use></Svg>
    </Container>
)

}