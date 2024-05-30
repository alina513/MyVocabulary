import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import sprite from '../../assets/sprite.svg';

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
    Email: yup
      .string()
      .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Email is not valid')
      .required('Email is required'),
    Password: yup
      .string()
      .matches(
        /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
        'Password must be at least 7 characters long and contain at least one digit'
      )
      .required('Password is required'),
  })
  .required();

export const LoginForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisibleEyes, setIsVisibleEyes] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: '',
      Email: '',
      Password: '',
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = data => {
    console.log(data);
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
    console.log(value);
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
        {...register('Email')}
        data-has-error={!!errors.Email}
        data-is-valid={watch('Email') && !errors.Email}
      />
      {renderValidationMessage('Email')}
      <Wrapper>
        <Input
          placeholder="Password"
          {...register('Password')}
          type={isVisibleEyes ? 'text' : 'password'}
          data-has-error={!!errors.Password}
          data-is-valid={watch('Password') && !errors.Password}
        />
        {renderValidationMessage('Password')}
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
      <NavLink to="/register">Register</NavLink>
    </Form>
  );
};
