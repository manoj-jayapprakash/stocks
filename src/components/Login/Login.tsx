import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { schema } from './loginValidation';
import { TextBox } from '../Form';
import { Button } from '../Form/Button';

type LoginFormFields = {
  email: string;
  password: string;
};

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormFields> = (data) => {
    navigate('/');
  };

  return (
    <main className="p-8 border-8 rounded-3xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextBox
            type="text"
            label="Email"
            fieldName="email"
            register={register}
          />
          <TextBox
            type="password"
            label="Password"
            fieldName="password"
            register={register}
          />
        </div>
        <div className="mt-4 text-center">
          <Button
            label="Login"
            type="submit"
            buttonStyles="btn btn-sm btn-primary"
          />
        </div>
      </form>
    </main>
  );
};
