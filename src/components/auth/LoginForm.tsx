'use client';

import { FormFieldsType } from '@/lib/types/fields';
import InputWithLabel from '../InputWithLabel';
import { Button } from '../ui/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import useFetch from '@/hooks/useFetch';
import { useEffect } from 'react';
import { LoginResponse } from '@/lib/types/auth';
import Loading from '../ui/loading';

type LoginFormProps = {};

const LoginForm = ({}: LoginFormProps) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormFieldsType>();
  // const { data, error, fetchData, isLoading } = useFetch<LoginResponse>();

  // useEffect(() => {
  //   if (data) {
  //     const authStatus = {
  //       name: data.data.Name,
  //       isLoggedIn: true,
  //       token: data.data.Token,
  //     };
  //     localStorage.setItem('user', JSON.stringify(authStatus));
  //     alert('Login sukses');
  //     router.push('/turis');
  //   }

  //   if (error) {
  //     alert(error);
  //   }
  // }, [data, error]);

  const onSubmit: SubmitHandler<FormFieldsType> = async (data) => {
    // if (data.email && data.password) {
    //   fetchData('authaccount/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       email: data.email,
    //       password: data.password,
    //     }),
    //   });
    // }
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
