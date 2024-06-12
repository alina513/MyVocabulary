import {
  Wrapper,
  Logo,
  Svg,
  Text,
  List,
  ItemText,
  MainContainer,
} from './Login.styled';
import { LoginForm } from './LoginForm';
import sprite from '../../assets/sprite.svg';

export const Login = () => {
  return (
    <MainContainer>
      <Wrapper>
        <div>
          <Logo>
            <Svg>
              <use xlinkHref={sprite + '#icon-logo'}></use>
            </Svg>
            <Text>VocabBuilder</Text>
          </Logo>
          <LoginForm />
        </div>
        <List>
          <ItemText>Word</ItemText>
          <ItemText>Translation</ItemText>
          <ItemText>Grammar</ItemText>
          <ItemText>Progress</ItemText>
        </List>
      </Wrapper>
    </MainContainer>
  );
};
