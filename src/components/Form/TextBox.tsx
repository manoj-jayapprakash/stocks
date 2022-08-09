import React from 'react';
import { RegisterOptions } from 'react-hook-form';

type TextBoxProps = {
  label: string;
  placeholder?: string;
};

export const TextBox = (props: TextBoxProps) => {
  const { label, placeholder } = props;
  return (
    <div className="form-control max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
};
