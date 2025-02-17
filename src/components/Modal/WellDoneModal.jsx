import Modal from 'react-modal';

import sprite from '../../assets/sprite.svg';
import { useSelector } from 'react-redux';
import { selectResults } from '../../redux/words/selectors';
import { useNavigate } from 'react-router-dom';
import {
  Title,
  Wrapper,
  WrapperRes,
  Desc,
  Item,
  ButtonClose,
  Close,
  Container,
} from './WellDoneModal.styled';
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
      borderRadius: '30px',
      backgroundColor: '#85AA9F',
    },
  };

  const results = useSelector(selectResults);
  const navigate = useNavigate();

  const doneTasks = results.filter(task => task.isDone);
  const notDoneTasks = results.filter(task => !task.isDone);

  return (
    <>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={() => {
          setIsOpenModal(false);
          navigate('/dictionary');
        }}
        style={customStyles}
        contentLabel="More info modal"
      >
        <Container>
          <ButtonClose
            onClick={() => {
              setIsOpenModal(false);
              navigate('/dictionary');
            }}
          >
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
                  <Item key={task._id}>{task.ua}</Item>
                ))}
              </ul>
            </WrapperRes>
            <WrapperRes>
              <Desc>Mistakes:</Desc>
              <ul>
                {notDoneTasks.map(task => (
                  <Item key={task._id}>{task.ua}</Item>
                ))}
              </ul>
            </WrapperRes>
          </Wrapper>
        </Container>
      </Modal>
    </>
  );
};
