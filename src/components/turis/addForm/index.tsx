'use client';

import InputWithLabel from '@/components/InputWithLabel';
import { Button } from '@/components/ui/button';
import { MutationFormFieldsType } from '@/lib/types/fields';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

type AddNewTouristFormProps = {
  token: string;
};

const AddNewTouristForm = ({ token }: AddNewTouristFormProps) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<MutationFormFieldsType>();
  const onSubmit: SubmitHandler<MutationFormFieldsType> = async (data) => {
    try {
      const body = {
        tourist_location: data.location,
        tourist_name: data.name,
        tourist_email: data.email,
      };
      await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/Tourist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      alert('Menambahkan turis baru sukses');
      router.push('/turis');
    } catch (error) {
      // console.log(error);
      alert('Menambahkan turis baru gagal');
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-2"
    >
      <InputWithLabel<MutationFormFieldsType>
        name="name"
        placeholder="Masukkan nama"
        type="text"
        register={register}
      />
      <InputWithLabel<MutationFormFieldsType>
        name="email"
        placeholder="email@email.com"
        type="email"
        register={register}
      />
      <InputWithLabel<MutationFormFieldsType>
        name="location"
        placeholder="Jakarta"
        type="text"
        register={register}
      />
      <Button type="submit">Selesai</Button>
    </form>
  );
};

export default AddNewTouristForm;
