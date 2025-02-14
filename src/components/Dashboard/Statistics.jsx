import { Span, Stat } from './Statistics.styled';
import { useSelector } from 'react-redux';
import { selectTasks } from '../../redux/words/selectors';

export const Statistics = () => {
  const words = useSelector(selectTasks);
  return (
    <Stat>
      To study:<Span>{words?.length === 0 ? 0 : words.length/2}</Span>
    </Stat>
  );
};
