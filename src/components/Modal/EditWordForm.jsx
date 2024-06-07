import Modal from 'react-modal';
import { Edit, Delet } from './EditwordModal.styled';

import sprite from '../../assets/sprite.svg';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/auth/selectors';

import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { editWord } from '../../redux/words/operation';
import { useState } from 'react';
import {
  Wrapper,
  ButtonClose,
  Close,
  InputContainer,
  Input,
  ContainerLang,
  Lang,
  SvgLang,
  ButtonContainer,
  AddButton, 
  CancelButton
} from './EditWordForm.styled';

Modal.setAppElement('#modal');

export const EditWordForm = ({
  isOpenModal,
  setIsOpenModal,
  wordData
}) =>

 {const customStyles = {
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
    setIsOpenModal(true);
  };
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const en = event.target.elements.eng.value;
    const ua = event.target.elements.ukr.value;
    const category = wordData.category;
    const isIrregular = wordData.isIrregular;
    const id = wordData._id;
  

    dispatch(editWord({ id, en, ua, category, isIrregular, token }));
    event.target.reset();
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
        <Wrapper onSubmit={handleSubmit}>
          <ButtonClose onClick={() => setIsOpenModal(false)}>
            <Close>
              <use xlinkHref={sprite + '#icon-close'}></use>
            </Close>
          </ButtonClose>

          <InputContainer>
            <Input name="ukr"></Input>

            <ContainerLang>
              <SvgLang>
                <use xlinkHref={sprite + '#icon-ukraine'}></use>
              </SvgLang>
              <Lang>Ukrainian</Lang>
            </ContainerLang>
          </InputContainer>
          <InputContainer>
            <Input name="eng"></Input>

            <ContainerLang>
              <SvgLang>
                <use xlinkHref={sprite + '#icon-uk'}></use>
              </SvgLang>
              <Lang>English</Lang>
            </ContainerLang>
          </InputContainer>
          <ButtonContainer>
            <AddButton type="submit">Save</AddButton>
            <CancelButton type="button" onClick={() => setIsOpenModal(false)}>
              Cancel
            </CancelButton>
          </ButtonContainer>
        </Wrapper>
      </Modal>
    </>
  );
};
