import React from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

type TextBoxProps<TFieldValue> = {
  type: 'text' | 'password' | 'search';
  label?: string;
  fieldName: Path<TFieldValue>;
  register: UseFormRegister<TFieldValue>;
  placeholder?: string;
  customStyle?: string;
};

export const TextBox = <TFieldValue,>(props: TextBoxProps<TFieldValue>) => {
  const {
    type,
    label,
    register,
    fieldName,
    placeholder,
    customStyle = '',
  } = props;
  const cssClass =
    customStyle.length > 0
      ? customStyle
      : 'input input-bordered input-sm w-full max-w-xs';

  return (
    <div className="flex items-center justify-between">
      <label>{label}</label>
      <input
        className={cssClass}
        type={type}
        placeholder={placeholder}
        {...register(fieldName)}
      />
    </div>
  );
};
