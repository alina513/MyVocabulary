import Modal from 'react-modal';
import { Edit, Delet, Wrapper, Svg, Content } from './EditwordModal.styled';
import sprite from '../../assets/sprite.svg';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { EditWordForm } from './EditWordForm';
import { deleteWordById } from '../../redux/words/operation';

Modal.setAppElement('#modal');

export const EditWordModal = ({ isOpenModal, setIsOpenModal, wordData }) => {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const customStyles = {
    overlay: {
      backgroundColor: 'transparent',
      width: '100wv',
      height: '100hv'
    },
    content: {
      boxSizing: 'border-box',
      top: '75%',
      left: '70%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '12px 0px 12px 0px',
      width: '130px',
      height: '80px',
      borderRadius: '15px',
      backgroundColor: '#FFF',
      boxShadow: '0 4px 47px 0 rgba(18, 20, 23, 0.08)',
      border: 'none',
    },
  };

  const handleEditClick = () => {
    setIsOpenEditModal(true);
  };

  
  const dispatch = useDispatch();

  const handleDelete = () => {
    const id = wordData._id;

    dispatch(deleteWordById({ id }));
    setIsOpenModal(false);
  };

  return (
    <Content>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={() => {
          setIsOpenModal(false);
        }}
        style={customStyles}
        contentLabel="More info modal"
      >
        <Wrapper onSubmit={handleDelete}>
          <Edit onClick={handleEditClick} type="button">
            <Svg>
              <use xlinkHref={sprite + '#icon-pen'}></use>
            </Svg>
            Edit
          </Edit>
          <Delet type="submit">
            <Svg>
              <use xlinkHref={sprite + '#icon-trash'}></use>
            </Svg>
            Delete
          </Delet>
        </Wrapper>
      </Modal>
      <EditWordForm
        isOpenModal={isOpenEditModal}
        setIsOpenModal={setIsOpenEditModal}
        wordData={wordData}
      />
    </Content>
  );
};
