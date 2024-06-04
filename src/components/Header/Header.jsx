import { UserNav } from "./UserNav";
import { UserBar } from "./UserBar";
import { Container } from "./Headeer.styled";
import sprite from "../../assets/sprite.svg";
import { Logo, Svg, Text } from "../Registration/Registration.styled";

export const Header = () => {
   
    return (
        <Container>
            <Logo>
                <Svg><use xlinkHref={sprite + "#icon-logo"}></use></Svg>
                <Text>VocabBuilder</Text>
            </Logo>
        <UserNav/>
        <UserBar />
        </Container>
    )
}