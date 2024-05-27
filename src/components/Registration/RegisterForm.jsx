import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  Form,
  Input,
  Title,
  Text,
  NavLink,
  Button,
  ErrorMessage,
  SuccessMessage
} from './RegisterForm.styled';

const schema = yup
  .object({
    Name: yup.string().required('Name is required'),
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

export const RegisterForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
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
}

const handleButtonClick = () => {
  setIsSubmitted(true);
};
  
  const renderValidationMessage = (field) => {
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
        {...register('Name')}
        data-has-error={!!errors.Name}
        data-is-valid={watch('Name') && !errors.Name}
      />
      {/* {errors.Name && <Error>{errors.Name.message}</Error>} */}
      {renderValidationMessage('Name')}
      <Input
        placeholder="Email"
        {...register('Email')}
        data-has-error={!!errors.Email}
        data-is-valid={watch('Email') && !errors.Email}
      />
      {/* {errors.Email && <Error>{errors.Email.message}</Error>} */}
      {renderValidationMessage('Email')}
      <Input
        placeholder="Password"
        {...register('Password')}
        data-has-error={!!errors.Password}
        data-is-valid={watch('Password') && !errors.Password}
      />
      {/* {errors.Password && <Error>{errors.Password.message}</Error>} */}
      {renderValidationMessage('Password')}

      <Button type="submit" onClick={handleButtonClick}>Register</Button>
      <NavLink>Login</NavLink>
    </Form>
  );
};


