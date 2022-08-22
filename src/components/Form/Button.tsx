import React from 'react';

type ButtonProps = {
  type: 'submit' | 'button';
  label: string;
  className?: string;
  buttonStyles?: string;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = (props: ButtonProps) => {
  const { type, label, buttonStyles = 'btn', clickHandler } = props;
  return (
    <div>
      <button className={buttonStyles} type={type} onClick={clickHandler}>
        {label}
      </button>
    </div>
  );
};
