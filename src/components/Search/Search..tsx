import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TextBox } from '../Form';

type SearchBoxField = {
  search: string;
};

export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchBoxField>();
  return (
    <div className="ml-auto w-96">
      <TextBox
        type="search"
        fieldName="search"
        register={register}
        placeholder="Search"
        customStyle="input input-bordered input-sm w-full"
      />
    </div>
  );
};
