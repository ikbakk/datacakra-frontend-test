'use client';

import { FormFieldsType } from '@/lib/types/fields';
import InputWithLabel from '../InputWithLabel';
import { Button } from '../ui/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { clientComponentClient } from '@/lib/supabaseClient/client';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormFieldsType>();

  const createAccount = async (data: FormFieldsType) => {
    try {
      const res = await clientComponentClient.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            name: data.name,
          },
        },
      });

      if (res.error) {
        throw new Error(res.error.message);
      }

      alert('Selamat akun anda telah dibuat');
      router.replace('/login');
    } catch (error) {
      const err = error as Error;
      alert(err.message);
    }
  };

  const onSubmit: SubmitHandler<FormFieldsType> = async (data) => {
    await createAccount(data);
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
