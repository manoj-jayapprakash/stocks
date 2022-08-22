import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { TextBox, Button } from '../Form';

type FormFields = {
  name: string;
};

type TProps = {
  closeModal: Function;
};

export const AddNewStockForm = (props: TProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    props.closeModal();
  };
  return (
    <div>
      <p className="text-2xl mb-10">Add New Stock</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextBox
            type="search"
            label="Enter stock name or symbol"
            fieldName="name"
            register={register}
          />
        </div>
        <div className="mt-10 text-center">
          <Button
            label="Search"
            type="submit"
            buttonStyles="btn btn-sm btn-primary"
          />
        </div>
      </form>
    </div>
  );
};
