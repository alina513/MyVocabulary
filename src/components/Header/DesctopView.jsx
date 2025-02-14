import {
  Container,
  Name,
  Round,
  Avatar,
  Svg,
  ButClose,
} from './DecstopView.styled';
import sprite from '../../assets/sprite.svg';
import { selectUser } from '../../redux/auth/selectors';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { MobileMenu } from './MobileMenu';
export const DesktopView = () => {
  const user = useSelector(selectUser);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Container>
        <Name>{user?.name}</Name>
        <Round>
          <Avatar>
            <use xlinkHref={sprite + '#icon-avatar'}></use>
          </Avatar>
        </Round>
        <ButClose onClick={() => setIsOpen(!isOpen)}>
        <Svg>
          <use xlinkHref={sprite + '#icon-Nav'}></use>
        </Svg>
        </ButClose>
      </Container>
      <MobileMenu closeMenu={() => setIsOpen(!isOpen)} isOpen={isOpen} />
    </>
  );
};
