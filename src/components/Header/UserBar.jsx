import sprite from '../../assets/sprite.svg';
import { useDispatch } from 'react-redux';
import { logOut, refreshUser } from '../../redux/auth/operations';
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { useEffect } from 'react';
import { Avatar, Name, Logout, Round, Svg, Container } from "./UserBar.styled"
export const UserBar = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(refreshUser());
      }, [dispatch]);
    const user = useSelector(selectUser);
    const hadleLogOut = () => {
dispatch(logOut())
    }
    if (!user) {
        return null; // Або замініть це на індикатор завантаження, якщо бажаєте
    }
return(
    <Container>
    <Name>{user.name}</Name>
    <Round>
    <Avatar><use xlinkHref={sprite + '#icon-avatar'}></use></Avatar>
    </Round>
    <Logout type='submit' onClick={hadleLogOut}>Logout<Svg><use xlinkHref={sprite + '#icon-arrow'}></use></Svg></Logout>
    </Container>
)

}