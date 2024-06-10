import Modal from 'react-modal';
import { Edit, Delet, Wrapper, Svg } from './EditwordModal.styled';

import sprite from '../../assets/sprite.svg';

import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/auth/selectors';
import { useState } from 'react';
import { EditWordForm } from './EditWordForm';
import { deleteWordById } from '../../redux/words/operation';

Modal.setAppElement('#modal');


export const EditWordModal = ({ isOpenModal, setIsOpenModal, wordData}) => {
    const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const customStyles = {
    overlay: {
      backgroundColor: 'transparent',
      width: '1600px',
    },
    content: {
      boxSizing: 'border-box',
      top: '45%',
      left: '85%',
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

  const token = useSelector(selectToken);
  const dispatch = useDispatch();


  const handleDelete =  () => {
   const id = wordData._id;

    dispatch(deleteWordById({ id, token }));
    setIsOpenModal(false); 

  };


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
        <Wrapper onSubmit={handleDelete}>
        <Edit onClick={handleEditClick} type = 'button'><Svg><use xlinkHref={sprite + "#icon-pen"}></use></Svg>Edit</Edit>
        <Delet type='submit'><Svg><use xlinkHref={sprite + "#icon-trash"}></use></Svg>Delete</Delet>
        </Wrapper>
      </Modal>
      <EditWordForm isOpenModal={isOpenEditModal}
     setIsOpenModal={setIsOpenEditModal}
     wordData = {wordData}/>
    
    </>
  );
};
