import Modal from 'react-modal';
import * as yup from 'yup';
import {
  Wrapper,
  Title,
  Text,
  Select,
  Input,
  Lang,
  AddButton,
  CancelButton,
  Close,
  ButtonClose,
  Radio,
  RadioContainer,
  Label,
  SvgLang,
  ContainerLang,
  InputContainer,
  ButtonContainer,
  RadioText,
  ErrorMessage,
} from './ModalAddWord.styled';
import sprite from '../../assets/sprite.svg';
import { addWord, fetchCategories } from '../../redux/words/operation';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { selectCategories } from '../../redux/words/selectors';
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

export const ModalAddWord = ({ isOpenModalLogin, setIsOpenModalLogin }) => {
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
      // padding: '48px 16px 48px 16px',
      // maxWidth: '628px',
      // width: "343px",
      // height: '622px',
      borderRadius: '30px',
      backgroundColor: '#85AA9F',
      '@media (maxWidth: 1440px)': {
      width: "80%",
      height: '622px',
      padding: '48px 64px 48px 64px',
      }
    },
  };

  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const en = event.target.elements.eng.value;
      const ua = event.target.elements.ukr.value;
      const category = event.target.elements.categories.value;
      const isIrregular = event.target.elements.verb?.value;
      await schema.validate({ eng: en, ukr: ua });

      dispatch(addWord({ en, ua, category, isIrregular}));
      setIsOpenModalLogin(false);
      setErrorMessage('');
      event.target.reset();
      
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = useSelector(selectCategories);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isIrregular, setIsIrregular] = useState('false');

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  const handleRadioChange = event => {
    setIsIrregular(event.target.value);
  };

  return (
    <>
      <Modal
        isOpen={isOpenModalLogin}
        onRequestClose={() => {
          setIsOpenModalLogin(false);
        }}
        style={customStyles}
        contentLabel="More info modal"
      >
        <Wrapper onSubmit={handleSubmit}>
          <ButtonClose onClick={() => setIsOpenModalLogin(false)}>
            <Close>
              <use xlinkHref={sprite + '#icon-close'}></use>
            </Close>
          </ButtonClose>

          <Title>Add word</Title>
          <Text>
            Adding a new word to the dictionary is an important step in
            enriching the language base and expanding the vocabulary.
          </Text>
          <Select
            id="categories"
            name="categories"
            onChange={handleCategoryChange}
          >
            <option value=""></option>
            {categories &&
              categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
          </Select>

          {selectedCategory === 'verb' && (
            <RadioContainer>
              <Radio
                type="radio"
                name="verb"
                id="regular"
                value="false"
                checked={isIrregular === 'false'}
                onChange={handleRadioChange}
              ></Radio>
              <Label htmlFor="regular">Regular</Label>
              <Radio
                type="radio"
                name="verb"
                id="irregular"
                value="true"
                checked={isIrregular === 'true'}
                onChange={handleRadioChange}
              ></Radio>
              <Label htmlFor="irregular">Irregular</Label>
            </RadioContainer>
          )}
          {isIrregular === 'true' && (
            <RadioText>
              Such data must be entered in the format I form-II form-III form.
            </RadioText>
          )}

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
            <AddButton type="submit">Add</AddButton>
            <CancelButton
              type="button"
              onClick={() => setIsOpenModalLogin(false)}
            >
              Cancel
            </CancelButton>
          </ButtonContainer>
        </Wrapper>
      </Modal>
    </>
  );
};
