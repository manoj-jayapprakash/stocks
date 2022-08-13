import React from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

type TextBoxProps<TFieldValue> = {
  type: 'text' | 'password';
  label: string;
  fieldName: Path<TFieldValue>;
  register: UseFormRegister<TFieldValue>;
};

export const TextBox = <TFieldValue,>(props: TextBoxProps<TFieldValue>) => {
  const { type, label, register, fieldName } = props;

  return (
    <div className="mt-2 flex items-center justify-between">
      <label>{label}</label>
      <input
        className="input input-bordered w-full max-w-xs"
        type={type}
        {...register(fieldName)}
      />
    </div>
  );
};
