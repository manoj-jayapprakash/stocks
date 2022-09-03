import React, { useState } from 'react';
import { Button } from '../Form';
import Modal from 'react-modal';
import { AddNewWatchListForm } from './AddNewWatchlistForm';

type TProps = {
  label: string;
  type: 'primary' | 'secondary';
};

export const CreateNavMenu = (props: TProps) => {
  const { label, type } = props;
  const [showCreateWatchListForm, setShowCreateWatchListForm] = useState(false);

  const customStyles = {
    overlay: {
      zIndex: 11,
      backgroundColor: 'rgba(5, 10, 15, 0.9)',
    },
    content: {
      zIndex: 12,
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '35vw',
    },
  };

  const closeModal = () => {
    setShowCreateWatchListForm(false);
  };

  return (
    <>
      <Button
        type="button"
        label={label}
        buttonStyles="btn btn-sm"
        clickHandler={(e) =>
          setShowCreateWatchListForm(!showCreateWatchListForm)
        }
      />
      <Modal
        isOpen={showCreateWatchListForm}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Create New WatchList"
      >
        <AddNewWatchListForm closeModal={closeModal} type={type} />
      </Modal>
    </>
  );
};
