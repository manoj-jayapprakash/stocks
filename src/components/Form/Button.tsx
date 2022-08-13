import React from 'react';

type ButtonProps = {
  type: 'submit' | 'button';
  label: string;
};

export const Button = (props: ButtonProps) => {
  const { type, label } = props;
  return (
    <div>
      <button className="btn btn-primary" type={type}>
        {label}
      </button>
    </div>
  );
};
