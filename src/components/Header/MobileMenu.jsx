import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import Slide from '@mui/material/Slide';
import sprite from '../../assets/sprite.svg';
import { useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import {
  MainDiv,
  CloseBtn,
  Name,
  Round,
  Avatar,
  Logout,
  Svg,
  Link,
  Container
} from './MobileMenu.styled';

const modalRoot = document.querySelector('#menu-root');

export const MobileMenu = ({ closeMenu, isOpen }) => {
  const isMobileScreen = useMediaQuery('(max-width: 767px)');

  let location = useLocation();

  useEffect(() => {
    if (isOpen) {
      closeMenu();
    }
  }, [location]);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const hadleLogOut = () => {
    dispatch(logOut());
  };
  if (!user) {
    return null; 
  }

  return createPortal(
    <Slide
      direction="down"
      in={isOpen}
      easing={{
        enter: 'cubic-bezier(.17,.67,.83,.67)',
        exit: 'cubic-bezier(.17,.67,.83,.67)',
      }}
      mountOnEnter
      unmountOnExit
    >
      <MainDiv>
        <Container>
        <Name>{user.name}</Name>
        <Round>
          <Avatar>
            <use xlinkHref={sprite + '#icon-avatar2'}></use>
          </Avatar>
        </Round>
        </Container>
        <CloseBtn>
          <svg
            width={isMobileScreen ? '24px' : '32px'}
            height={isMobileScreen ? '24px' : '32px'}
            stroke="#EFEDE8"
            onClick={closeMenu}
          >
            <use xlinkHref={sprite + '#icon-close'} />
          </svg>
        </CloseBtn>
        <div>
        <Link to="/dictionary">Dictionary</Link>
      <Link to="/recommend">Recommend</Link>
      <Link to="/training">Training</Link>
      </div>
        <Logout type="submit" onClick={hadleLogOut}>
          Logout
          <Svg>
            <use xlinkHref={sprite + '#icon-arrow2'}></use>
          </Svg>
        </Logout>
      </MainDiv>
    </Slide>,
    modalRoot
  );
};
