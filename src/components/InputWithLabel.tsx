import { HTMLInputTypeAttribute } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';

type InputWithLabelProps = {
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
};

const InputWithLabel = ({ name, placeholder, type }: InputWithLabelProps) => {
  return (
    <div className="flex flex-col gap-1 ">
      <Label className="capitalize" htmlFor={name}>
        {name}
      </Label>
      <Input name={name} placeholder={placeholder} type={type} />
    </div>
  );
};

export default InputWithLabel;
