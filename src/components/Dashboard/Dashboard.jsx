import { Filters } from "./Filters";
import { Statistics } from "./Statistics";
import { AddWord } from "./AddWord";
import { Container, ContainerStat } from "./Dashboard.styled";
export const Dashboard = () => {
    return (
        <Container>
        <Filters/>
        <ContainerStat>
        <Statistics/>
        <AddWord/>
        </ContainerStat>
        </Container>
    )
}