
import Modal from 'react-modal';

import sprite from '../../assets/sprite.svg';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/auth/selectors';
import { useState } from 'react';
import { useEffect } from 'react';
import { selectResults } from '../../redux/words/selectors';
import { Title, Wrapper, WrapperRes, Desc, Item, ButtonClose, Close , Container} from './WellDoneModal.styled';
Modal.setAppElement('#modal');



export const WellDoneModal = ({ isOpenModal, setIsOpenModal }) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(18, 20, 23, 0.2)',
    },
    content: {
      boxSizing: 'border-box',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '48px 64px 48px 64px',
      paddingLeft: '64px',
      width: '527px',
      height: '519px',
      borderRadius: '30px',
      backgroundColor: '#85AA9F',
    },
  };

  
  const results = useSelector(selectResults);

const doneTasks = results.filter(task => task.isDone);
const notDoneTasks = results.filter(task => !task.isDone);
  
  

  return (
    <>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={() => {
          setIsOpenModal(false);
        }}
        style={customStyles}
        contentLabel="More info modal"
      >
        <Container>
        <ButtonClose onClick={() => setIsOpenModal(false)}>
            <Close>
              <use xlinkHref={sprite + '#icon-close'}></use>
            </Close>
          </ButtonClose>
          <Title>Well done</Title>
          <Wrapper>
            <WrapperRes>
                <Desc>Сorrect answers: </Desc>
                <ul>
        {doneTasks.map(task => (
          <Item key={task._id}>{task.en}</Item>
        ))}
      </ul>
            </WrapperRes>
            <WrapperRes>
                <Desc>Mistakes:</Desc>
          <ul>
        {notDoneTasks.map(task => (
          <Item key={task._id}>{task.en}</Item>
        ))}
      </ul>
      </WrapperRes>
      </Wrapper>
      </Container>
      </Modal>
    </>
  );
};

