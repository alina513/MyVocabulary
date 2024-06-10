import {
  Container,
  ContainerInputUkr,
  ContainerInputEng,
  WrapperLang,
  Input,
  ContainerLang,
  Lang,
  Svg,
  Text,
  Next,
  SvgNext,
  ContainerButton,
  Save,
  Cansel,
  Con
} from './TrainingRoom.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectTasks } from '../../redux/words/selectors';
import { selectToken } from '../../redux/auth/selectors';
import { fetchTasks, addAnswers } from '../../redux/words/operation';
import sprite from '../../assets/sprite.svg';
import { Circle } from 'rc-progress';
import { WellDoneModal } from '../../components/Modal/WellDoneModal';

export const TrainingRoom = () => {
  const token = useSelector(selectToken);
  const tasks = useSelector(selectTasks);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [translation, setTranslation] = useState('');
  const [answers, setAnswers] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const progress =
    answers && tasks.length > 0
      ? Math.ceil(((answers.length * 2) / tasks.length) * 100)
      : 0;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks({ token }));
  }, [dispatch, token]);

//   const handleNextTask = () => {
//     console.log(tasks)
    
//     if (tasks.length > 0 && translation) {
//         const currentTask = tasks[currentTaskIndex];
//       const newAnswer = {
//         _id: currentTask._id,
//         en: translation,
//         ua: currentTask.ua,
//         task: 'en',
//       };
//       setAnswers([...answers, newAnswer]);
//       console.log(answers);
//       setTranslation('');
//       setCurrentTaskIndex(prevIndex => (prevIndex + 1) % tasks.length);
//     }
//   };

const handleNextTask = () => {
    console.log(tasks);
    
    if (tasks.length > 0) {
        const currentTask = tasks[currentTaskIndex];
        if (translation) {
            const newAnswer = {
                _id: currentTask._id,
                en: translation,
                ua: currentTask.ua,
                task: 'en',
            };
            setAnswers([...answers, newAnswer]);
            console.log(answers);
            setTranslation('');
        }
        setCurrentTaskIndex(prevIndex => (prevIndex + 1) % tasks.length);
    }
};

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addAnswers({ data: answers, token }));
    setIsOpenModal(true);
    setTranslation('');
  };


  const CircularProgress = ({ progress }) => {
    const containerStyle = {
      display: 'flex',
      alignItems: 'center',
    };
  
    const circleContainerStyle = {
      position: 'relative',
      width: 50,
      height: 50,
      marginLeft: '16px', // відступ для кола
    };
  
    const progressTextStyle = {
      fontSize: '16px',
      fontWeight: '500',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };
  
    return (
      <div style={containerStyle}>
        <div style={circleContainerStyle}>
          <Circle 
            percent={progress}
            size={58}
            strokeWidth={5} 
            strokeColor="#2BD627" 
            trailColor="grey"
          />
          <div style={progressTextStyle}>{`${progress}`}</div>
        </div>
      </div>
    );
};

  return (
    <>
    <Con>
      <CircularProgress progress={progress}/>
      </Con>
      <form onSubmit={handleSubmit}>
        <Container>
          <ContainerInputUkr>
            <WrapperLang>
              <Input
                placeholder="Введіть переклад"
                value={translation}
                onChange={e => setTranslation(e.target.value)}
              ></Input>
              <ContainerLang>
                <Lang>English</Lang>
                <Svg>
                  <use xlinkHref={sprite + '#icon-uk'}></use>
                </Svg>
              </ContainerLang>
            </WrapperLang>
            {currentTaskIndex < (tasks.length/2) - 1 && (
              <Next type="button" onClick={handleNextTask}>
                Next
                <SvgNext>
                  <use xlinkHref={sprite + '#icon-switch'}></use>
                </SvgNext>
              </Next>
            )}
          </ContainerInputUkr>
          <ContainerInputEng>
            <WrapperLang>
              {/* <Text>
              {tasks.length > 0
                ? tasks[currentTaskIndex].en
                : 'No tasks available'}
            </Text> */}
              {tasks.length > 0 && tasks[currentTaskIndex]
                ? tasks[currentTaskIndex].ua
                : <Text>No tasks available</Text>}
              <ContainerLang>
                <Lang>Ukraine</Lang>
                <Svg>
                  <use xlinkHref={sprite + '#icon-ukraine'}></use>
                </Svg>
              </ContainerLang>
            </WrapperLang>
          </ContainerInputEng>
        </Container>
        <ContainerButton>
          <Save type="submit">Save </Save>
          <Cansel>Cansel</Cansel>
        </ContainerButton>
      </form>
      <WellDoneModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
    </>
  );
};
