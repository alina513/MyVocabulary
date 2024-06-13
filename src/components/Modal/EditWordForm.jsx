import Modal from 'react-modal';

import sprite from '../../assets/sprite.svg';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/auth/selectors';

import { useDispatch } from 'react-redux';
import { editWord } from '../../redux/words/operation';
import { useState } from 'react';
import * as yup from 'yup';
import toast from 'react-hot-toast'; 
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
  CancelButton,
  ErrorMessage,
} from './EditWordForm.styled';

Modal.setAppElement('#modal');

const schema = yup
  .object({
    eng: yup
      .string()
      .matches(/\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/, 'Text is not valid')
      .required('Is required'),
    ukr: yup
      .string()
      .matches(/^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u, 'Text is not valid')
      .required('Is required'),
  })
  .required();

export const EditWordForm = ({ isOpenModal, setIsOpenModal, wordData }) => {
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
      width: '627px',
      height: '345px',
      borderRadius: '30px',
      backgroundColor: '#85AA9F',
    },
  };

  const [errorMessage, setErrorMessage] = useState('');

  // const handleEditClick = () => {
  //   setIsOpenModal(true);
  // };
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    try {
      event.preventDefault();
      const en = event.target.elements.eng.value;
      const ua = event.target.elements.ukr.value;
      const category = wordData.category;
      const isIrregular = wordData.isIrregular;
      const id = wordData._id;
      await schema.validate({ eng: en, ukr: ua });

      dispatch(editWord({ id, en, ua, category, isIrregular, token }));
      event.target.reset();
      setIsOpenModal(false);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message);
      toast.error(error.message);
    }
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
          {/* <ErrorMessage>Write on language that set on input</ErrorMessage> */}
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
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
