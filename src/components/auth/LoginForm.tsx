'use client';

import { FormFieldsType } from '@/lib/types/fields';
import InputWithLabel from '../InputWithLabel';
import { Button } from '../ui/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { supabaseClient } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

type LoginFormProps = {};

const LoginForm = ({}: LoginFormProps) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormFieldsType>();

  const login = async (data: FormFieldsType) => {
    try {
      const res = await supabaseClient.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (res.error) {
        throw new Error(res.error.message);
      }

      alert('Login sukses');

      router.replace('/');
    } catch (error) {
      alert('Kredensial salah, periksa email atau password');
    }
  };

  const onSubmit: SubmitHandler<FormFieldsType> = async (data) => {
    await login(data);
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
