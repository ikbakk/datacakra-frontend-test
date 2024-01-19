'use client';

import { FormFieldsType } from '@/lib/types/fields';
import InputWithLabel from '../InputWithLabel';
import { Button } from '../ui/button';
import { useForm, SubmitHandler } from 'react-hook-form';

type LoginFormProps = {};

const LoginForm = ({}: LoginFormProps) => {
  const { register, handleSubmit } = useForm<FormFieldsType>();

  const onSubmit: SubmitHandler<FormFieldsType> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <InputWithLabel
        name="email"
        placeholder="contoh@email.com"
        type="email"
        register={register}
      />
      <InputWithLabel
        name="password"
        placeholder="password"
        type="password"
        register={register}
      />
      <Button type="submit">Masuk</Button>
    </form>
  );
};

export default LoginForm;
