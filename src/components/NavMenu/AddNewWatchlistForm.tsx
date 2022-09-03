import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { NavItems } from '.';
import {
  PRIMARY_NAV_API_URL,
  SECONDARY_NAV_API_URL,
} from '../../constants/app';
import useFetch from '../../hooks/useFetch';
import { TextBox, Button } from '../Form';

type FormFields = {
  name: string;
};

type TProps = {
  closeModal: Function;
  type: 'primary' | 'secondary';
};

export const AddNewWatchListForm = (props: TProps) => {
  const { type, closeModal } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();
  const navigate = useNavigate();
  const { data: primaryNavItems, error: primaryError } =
    useFetch<NavItems[]>(PRIMARY_NAV_API_URL);

  const { data: secondaryNavItems, error: secondaryError } = useFetch<
    NavItems[]
  >(SECONDARY_NAV_API_URL);

  const onSubmit: SubmitHandler<FormFields> = async (formData) => {
    const url =
      type === 'primary' ? PRIMARY_NAV_API_URL : SECONDARY_NAV_API_URL;
    const primId =
      primaryNavItems && primaryNavItems.length === 0
        ? 1
        : primaryNavItems && primaryNavItems.length + 1;
    const secId =
      secondaryNavItems && secondaryNavItems.length === 0
        ? 1
        : secondaryNavItems && secondaryNavItems.length + 1;
    const id = type === 'primary' ? primId : secId;
    const data = { id, linkName: formData.name };
    try {
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
    } catch (error) {}
    closeModal();
    navigate(`/watchlist/${id}`);
    window.location.reload();
  };
  return (
    <div>
      <p className="text-2xl mb-10">Add New WatchList</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextBox
            type="text"
            label="Enter your WatchList Name"
            fieldName="name"
            register={register}
          />
        </div>
        <div className="mt-10 text-center">
          <Button
            label="Save"
            type="submit"
            buttonStyles="btn btn-sm btn-primary"
          />
        </div>
      </form>
    </div>
  );
};
