import { Header } from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
export default function Layout() {
  const isLogedIn = useSelector(selectIsLoggedIn);
  return (
    <Container>
      {isLogedIn && <Header />}
      <Outlet />
    </Container>
  );
}
