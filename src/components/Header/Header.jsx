import { UserNav } from './UserNav';
import useMediaQuery from '@mui/material/useMediaQuery';
import { UserBar } from './UserBar';
import { Container } from './Headeer.styled';
import sprite from '../../assets/sprite.svg';
import { Logo, Svg, Text } from '../Registration/Registration.styled';
import { DesktopView } from './DesctopView';

export const Header = () => {
  const isBigScreen = useMediaQuery('(min-width: 1440px)');

  return (
    <Container>
      <Logo>
        <Svg>
          <use xlinkHref={sprite + '#icon-logo'}></use>
        </Svg>
        <Text>VocabBuilder</Text>
      </Logo>{isBigScreen ?
     ( <><UserNav />
      <UserBar /></>) : (<DesktopView/>)}
    </Container>
  );
};
