import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  Form,
  Input,
  Title,
  Text,
  NavLink,
  Button,
  Error,
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
  const onSubmit = data => console.log(data);
  console.log(watch('Name'));

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
        hasError={!!errors.Name}
        isValid={watch('Name') && !errors.Name}
      />
      {errors.Name && <Error>{errors.Name.message}</Error>}
      <Input
        placeholder="Email"
        {...register('Email')}
        hasError={!!errors.Email}
        isValid={watch('Email') && !errors.Email}
      />
      {errors.Email && <Error>{errors.Email.message}</Error>}
      <Input
        placeholder="Password"
        {...register('Password')}
        hasError={!!errors.Password}
        isValid={watch('Password') && !errors.Password}
      />
      {errors.Password && <Error>{errors.Password.message}</Error>}

      <Button type="submit">Register</Button>
      <NavLink>Login</NavLink>
    </Form>
  );
};
