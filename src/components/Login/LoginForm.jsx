import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import sprite from '../../assets/sprite.svg';
import { logIn } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

import {
  Form,
  Input,
  Title,
  Text,
  NavLink,
  Button,
  ErrorMessage,
  SuccessMessage,
  Wrapper,
  Svg,
  BtnEye,
} from './LoginForm.styled';

const schema = yup
  .object({
    email: yup
      .string()
      .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Email is not valid')
      .required('Email is required'),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
        'Password must be 7 characters: 6 letters, 1 number'
      )
      .required('Password is required'),
  })
  .required();

export const LoginForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisibleEyes, setIsVisibleEyes] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = data => {
    dispatch(logIn(data));
  };

  const handleButtonClick = () => {
    setIsSubmitted(true);
  };

  const handleVisibleEye = () => {
    setIsVisibleEyes(!isVisibleEyes);
  };

  const renderValidationMessage = field => {
    if (!isSubmitted) return null;
    const value = watch(field);
    const error = errors[field];

    if (value && !error) {
      return <SuccessMessage>Success {field}</SuccessMessage>;
    } else if (error) {
      return <ErrorMessage>Error {field}</ErrorMessage>;
    }
    return null;
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Login</Title>
      <Text>
        Please enter your login details to continue using our service:
      </Text>
      <Input
        placeholder="Email"
        {...register('email')}
        data-has-error={!!errors.email}
        data-is-valid={watch('email') && !errors.email}
      />
      {renderValidationMessage('email')}
      <Wrapper>
        <Input
          placeholder="Password"
          {...register('password')}
          type={isVisibleEyes ? 'text' : 'password'}
          data-has-error={!!errors.password}
          data-is-valid={watch('password') && !errors.password}
        />
        {renderValidationMessage('password')}
        <BtnEye type="button" onClick={handleVisibleEye}>
          {isVisibleEyes ? (
            <Svg>
              <use xlinkHref={sprite + '#icon-eye'}></use>
            </Svg>
          ) : (
            <Svg>
              <use xlinkHref={sprite + '#icon-eye-off'}></use>
            </Svg>
          )}
        </BtnEye>
      </Wrapper>

      <Button type="submit" onClick={handleButtonClick}>
        Login
      </Button>
      <NavLink to="/">Register</NavLink>
    </Form>
  );
};
