'use client';

import { HTMLInputTypeAttribute } from 'react';
import { UseFormRegister, RegisterOptions } from 'react-hook-form';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { FormFieldsType } from '@/lib/types/fields';

type InputWithLabelProps = {
  name: keyof FormFieldsType;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  register: UseFormRegister<FormFieldsType>;
  registerOpions?: RegisterOptions;
};

const InputWithLabel = ({
  name,
  placeholder,
  type,
  register,
  registerOpions,
}: InputWithLabelProps) => {
  return (
    <div className="flex flex-col gap-1 ">
      <Label className="capitalize" htmlFor={name}>
        {name}
      </Label>
      <Input
        {...register(name, registerOpions)}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default InputWithLabel;
