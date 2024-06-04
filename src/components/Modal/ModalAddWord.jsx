import Modal from 'react-modal';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
  RadioText
} from './ModalAddWord.styled';
import sprite from '../../assets/sprite.svg';
import { addWord } from '../../redux/words/operation';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/auth/selectors';
Modal.setAppElement('#modal');

const schema = yup
  .object({
    eng: yup
      .string()
      .matches(/\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/
      , 'Text is not valid')
      .required('Is required'),
    ukr: yup
      .string()
      .matches(
        /^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u,
        'Text is not valid'
      )
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
      padding: '48px 64px 48px 64px',
      paddingLeft: '64px',
      width: '628px',
      height: '622px',
      borderRadius: '30px',
      backgroundColor: '#85AA9F',
    },
  };

  const token = useSelector(selectToken);
const dispatch = useDispatch();

const { register, handleSubmit, control, reset, formState: { errors } } = useForm({
  resolver: yupResolver(schema),
});

  // const handleSubmit =  event => {
  //   event.preventDefault();
  //   const en = event.target.elements.eng.value;
  //   const ua = event.target.elements.ukr.value;
  //   const category = event.target.elements.categories.value;
  //   const isIrregular = event.target.elements.verb.value;
  //   // const existingContact = contacts.some(contact => contact.name === name);
  //   // if (existingContact) {
  //   //   // alert(`Contact with name '${name}' already exists!`);

  //   //   const notify = name =>
  //   //     toast.error(`Contact with name '${name}' already exists!`);
  //   //     notify(name);
  //   //   event.target.reset();
      
  //   //   return;
  //   // }

  //   dispatch(addWord({en, ua, category, isIrregular, token }));
  //   event.target.reset();
  // };


  const onSubmit = (data) => {
    dispatch(addWord({ ...data, token }));
    toast.success('Word added successfully!');
    reset();
    setIsOpenModalLogin(false);
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
          <ButtonClose onClick={()=>setIsOpenModalLogin(false)}><Close>
            <use xlinkHref={sprite + '#icon-close'}></use>
          </Close></ButtonClose>

          <Title>Add word</Title>
          <Text>
            Adding a new word to the dictionary is an important step in
            enriching the language base and expanding the vocabulary.
          </Text>
          <Select id="categories" name="categories">
            <option value=""></option>
            <option value="verb">verb</option>
            <option value="participle">participle</option>
            <option value="noun">noun</option>
            <option value="adjective">adjective</option>
            <option value="pronoun">pronoun</option>
            <option value="numerals">numerals</option>
            <option value="adverb">adverb</option>
            <option value="preposition">preposition</option>
            <option value="conjunction">conjunction</option>
            <option value="phrasal verb">phrasal verb</option>
            <option value="functional phrase">functional phrase</option>
          </Select>
          <RadioContainer>
          <Radio type='radio' name="verb" id="regular" value="false"></Radio>
<Label for="regular">Regular</Label>
<Radio type='radio' name="verb" id="irregular" value="true"></Radio>
<Label for="irregular">Irregular</Label>
          </RadioContainer>
          <RadioText>Such data must be entered in the format I form-II form-III form.</RadioText>
          <InputContainer>
          <Input name="ukr"></Input>
          <ContainerLang>
            <SvgLang><use xlinkHref={sprite + "#icon-ukraine"}></use></SvgLang>
          <Lang>Ukrainian</Lang>
          </ContainerLang>
          </InputContainer>
          <InputContainer>
          <Input name="eng"></Input>
          <ContainerLang>
            <SvgLang><use xlinkHref={sprite + "#icon-uk"}></use></SvgLang>
          <Lang>English</Lang>
          </ContainerLang>
          </InputContainer>
          <ButtonContainer>
          <AddButton type='submit'>Add</AddButton>
          <CancelButton type='button'>Cancel</CancelButton>
          </ButtonContainer>
        </Wrapper>
      </Modal>
    </>
  );
};
