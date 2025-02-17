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
  Con,
} from './TrainingRoom.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectTasks } from '../../redux/words/selectors';
import { fetchTasks, addAnswers } from '../../redux/words/operation';
import sprite from '../../assets/sprite.svg';
import { CircularProgress } from '../../components/Progress';
import { WellDoneModal } from '../../components/Modal/WellDoneModal';
import { Empty } from './Empty';

export const TrainingRoom = () => {
  const tasks = useSelector(selectTasks);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(tasks.length / 2);
  const [translation, setTranslation] = useState('');
  const [answers, setAnswers] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const progress =
    answers && tasks.length > 0
      ? Math.ceil(((answers.length * 2) / tasks.length) * 100)
      : 0;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleNextTask = () => {
    if (tasks.length > 0) {
      const currentTask = tasks[currentTaskIndex];
      if (translation) {
        const newAnswer = {
          _id: currentTask._id,
          en: currentTask.en,
          ua: translation,
          task: 'ua',
        };
        setAnswers([...answers, newAnswer]);
        setTranslation('');
      }
      setCurrentTaskIndex(prevIndex => (prevIndex + 1) % tasks.length);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const currentTask = tasks[currentTaskIndex];

    if (translation) {
      const newAnswer = {
        _id: currentTask._id,
        en: currentTask.en,
        ua: translation,
        task: 'ua',
      };
      const updatedAnswers = [...answers, newAnswer];
      setAnswers(updatedAnswers);
      setTranslation('');
      setCurrentTaskIndex(prevIndex => (prevIndex + 1) % tasks.length);
      dispatch(addAnswers({ data: updatedAnswers }));
      setIsOpenModal(true);
    }
  };

  return (
    <>
      {tasks.length > 0 ? (
        <>
          <Con>
            <CircularProgress
              size={58}
              strokeWidth={5}
              progress={progress}
              withText={true}
            />
          </Con>
          <form onSubmit={handleSubmit}>
            <Container>
              <ContainerInputUkr>
                <WrapperLang>
                  <Input
                    placeholder="Введіть переклад"
                    value={translation}
                    onChange={e => setTranslation(e.target.value)}
                    rows="8"
                    cols="50"
                  ></Input>
                  <ContainerLang>
                    <Lang>Ukraine</Lang>
                    <Svg>
                      <use xlinkHref={sprite + '#icon-ukraine'}></use>
                    </Svg>
                  </ContainerLang>
                </WrapperLang>
                {currentTaskIndex < tasks.length - 1 && (
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
                  {tasks.length > 0 && tasks[currentTaskIndex] ? (
                    <Text>{tasks[currentTaskIndex].en}</Text>
                  ) : (
                    <Text>No tasks available</Text>
                  )}
                  <ContainerLang>
                    <Lang>English</Lang>
                    <Svg>
                      <use xlinkHref={sprite + '#icon-uk'}></use>
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
          <WellDoneModal
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
          />
        </>
      ) : (
        <Empty />
      )}
    </>
  );
};
