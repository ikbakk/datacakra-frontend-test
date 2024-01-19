'use client';

import InputWithLabel from '../InputWithLabel';
import { Button } from '../ui/button';
import { useForm, SubmitHandler } from 'react-hook-form';
type FormFieldsType = {
  email: string;
  password: string;
  name?: string;
};
type RegisterFormProps = {};

const RegisterForm = ({}: RegisterFormProps) => {
  const { register, handleSubmit } = useForm<FormFieldsType>();

  const onSubmit: SubmitHandler<FormFieldsType> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <InputWithLabel
        name="name"
        placeholder="name"
        type="text"
        register={register}
      />
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
      <Button type="submit">Daftar Sekarang</Button>
    </form>
  );
};

export default RegisterForm;
