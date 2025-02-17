import { Span, Stat } from './Statistics.styled';
import { useSelector } from 'react-redux';
import { selectWords } from '../../redux/words/selectors';

export const Statistics = () => {
  const words = useSelector(selectWords);
  return (
    <Stat>
      To study:<Span>{words?.length === 0 ? 0 : words.length}</Span>
    </Stat>
  );
};
