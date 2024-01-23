'use client';

import { FormFieldsType } from '@/lib/types/fields';
import InputWithLabel from '../InputWithLabel';
import { Button } from '../ui/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';

type LoginFormProps = {};

const LoginForm = ({}: LoginFormProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { register, handleSubmit } = useForm<FormFieldsType>();

  const onSubmit: SubmitHandler<FormFieldsType> = async (data) => {
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      const resJson = await res.json();

      if (resJson.message !== 'success') {
        throw new Error(resJson.message);
      }

      alert('Login sukses');

      if (searchParams.get('from')) {
        router.push(searchParams.get('from') as string);
      } else {
        router.push('/');
      }
    } catch (error) {
      // console.log(error);
      alert('Login gagal, periksa kredensial anda');
    }
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
