import Modal from 'react-modal';
import { Edit, Delet } from './EditwordModal.styled';

import sprite from '../../assets/sprite.svg';

import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/auth/selectors';
import { useState } from 'react';
import { EditWordForm } from './EditWordForm';
import { deleteWord } from '../../redux/words/operation';

Modal.setAppElement('#modal');


export const EditWordModal = ({ isOpenModal, setIsOpenModal, wordData}) => {
    const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(30, 66, 89, 0.4)',
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
      width: '628px',
      height: '622px',
      borderRadius: '30px',
      backgroundColor: '#85AA9F',
    },
  };

  const handleEditClick = () => {
    setIsOpenEditModal(true);
  };

  const token = useSelector(selectToken);
  const dispatch = useDispatch();


  const handleDelete = async() => {
   const id = wordData._id;

  await dispatch(deleteWord({ id, token }));
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
        <form onSubmit={handleDelete}>
        <Edit onClick={handleEditClick} type = 'button'>Edit</Edit>
        <Delet type='submit'>Delete</Delet>
        </form>
      </Modal>
      <EditWordForm isOpenModal={isOpenEditModal}
     setIsOpenModal={setIsOpenEditModal}
     wordData = {wordData}/>
    
    </>
  );
};
