import {
  Wrapper,
  Logo,
  Svg,
  Text,
  List,
  ItemText,
} from './Registration.styled';
import { RegisterForm } from './RegisterForm';
import sprite from '../../assets/sprite.svg';

export const Registration = () => {
  return (
    
      <Wrapper>
        <div>
          <Logo>
            <Svg>
              <use xlinkHref={sprite + '#icon-logo'}></use>
            </Svg>
            <Text>VocabBuilder</Text>
          </Logo>
          <RegisterForm />
        </div>
        <List>
          <ItemText>Word</ItemText>
          <ItemText>Translation</ItemText>
          <ItemText>Grammar</ItemText>
          <ItemText>Progress</ItemText>
        </List>
      </Wrapper>
  );
};
