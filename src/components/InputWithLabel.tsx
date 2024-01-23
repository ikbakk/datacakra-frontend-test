'use client';

import { HTMLInputTypeAttribute } from 'react';
import {
  UseFormRegister,
  RegisterOptions,
  FieldValues,
  Path,
} from 'react-hook-form';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { AuthFormFieldsType, MutationFormFieldsType } from '@/lib/types/fields';

type InputWithLabelProps<T extends FieldValues> = {
  name: Path<T>;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  register: UseFormRegister<T>;
  registerOpions?: RegisterOptions;
};

const InputWithLabel = <T extends FieldValues>({
  name,
  placeholder,
  type,
  register,
  registerOpions,
}: InputWithLabelProps<T>) => {
  return (
    <div className="flex flex-col gap-1 ">
      <Label className="capitalize" htmlFor={name.toString()}>
        {name.toString()}
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
