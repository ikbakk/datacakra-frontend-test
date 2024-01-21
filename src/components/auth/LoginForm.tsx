'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { FormFieldsType } from '@/lib/types/fields';
import InputWithLabel from '../InputWithLabel';
import { Button } from '../ui/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { clientComponentClient } from '@/lib/supabaseClient/client';

type LoginFormProps = {};

const LoginForm = ({}: LoginFormProps) => {
  const router = useRouter();
  const supabase = createClientComponentClient({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_KEY!,
  });
  const { register, handleSubmit } = useForm<FormFieldsType>();

  const login = async (data: FormFieldsType) => {
    try {
      const res = await clientComponentClient.auth.signInWithPassword({
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
