'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { MutationFormFieldsType } from '../../../../lib/types/fields';
import InputWithLabel from '@/components/InputWithLabel';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

type TouristEditFormprops = {
  name: string;
  location: string;
  email: string;
  token: string;
};

const TouristEditForm = ({
  name,
  location,
  email,
  token,
}: TouristEditFormprops) => {
  const path = usePathname();
  const idTourist = path.split('/')[2];
  const router = useRouter();
  const searchParams = useSearchParams();
  const isEditing = searchParams.get('isEditing');
  const { register, handleSubmit } = useForm<MutationFormFieldsType>();

  useEffect(() => {
    router.refresh();
  }, []);

  const onSubmit: SubmitHandler<MutationFormFieldsType> = async (data) => {
    try {
      const body = {
        tourist_location: data.location,
        tourist_name: data.name,
        tourist_email: data.email,
        id: idTourist,
      };
      await fetch('/api/turis/update', {
        method: 'PUT',
        body: JSON.stringify(body),
      });

      alert('Update sukses');
      router.refresh();
    } catch (error) {
      // console.log(error);
      alert('Update gagal');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-2"
    >
      <InputWithLabel<MutationFormFieldsType>
        name="name"
        placeholder={name}
        type="text"
        register={register}
        disabled={isEditing !== 'true'}
      />
      <InputWithLabel<MutationFormFieldsType>
        name="email"
        placeholder={email}
        type="email"
        register={register}
        disabled={isEditing !== 'true'}
      />
      <InputWithLabel<MutationFormFieldsType>
        name="location"
        placeholder={location}
        type="text"
        register={register}
        disabled={isEditing !== 'true'}
      />
      <Button disabled={isEditing !== 'true'} type="submit">
        Selesai
      </Button>
    </form>
  );
};

export default TouristEditForm;
