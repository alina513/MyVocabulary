import { Navigation, Link } from "./UserNav.styled"
export const UserNav = () => {
    return(
        <Navigation>
            <Link to="/dictionary">Dictionary</Link>
            <Link to="/recommend">Recommend</Link>
            <Link to="/training">Training</Link>
        </Navigation>
    )
}