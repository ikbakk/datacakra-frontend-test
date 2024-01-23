'use client';

import { FormFieldsType } from '@/lib/types/fields';
import InputWithLabel from '../InputWithLabel';
import { Button } from '../ui/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormFieldsType>();

  const createAccount = async (data: FormFieldsType) => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_BASEURL}/api/authaccount/registration`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );

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