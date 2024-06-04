import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import sprite from '../../assets/sprite.svg';
import { signUp } from '../../redux/auth/operations';
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
} from './RegisterForm.styled';

const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    email: yup
      .string()
      .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Email is not valid')
      .required('Email is required'),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
        'Password must be at least 7 characters long and contain at least one digit'
      )
      .required('Password is required'),
  })
  .required();

export const RegisterForm = () => {
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
      name: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = data => {
    console.log("DATA", data);
    dispatch(signUp(data))
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
      <Title>Register</Title>
      <Text>
        To start using our services, please fill out the registration form
        below. All fields are mandatory:
      </Text>
      <Input
        placeholder="Name"
        {...register('name')}
        data-has-error={!!errors.name}
        data-is-valid={watch('name') && !errors.name}
      />
      {renderValidationMessage('name')}
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
        Register
      </Button>
      <NavLink to="/login">Login</NavLink>
    </Form>
  );
};
