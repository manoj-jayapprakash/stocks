import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button } from '../Form';
import { AddNewStockForm } from './AddNewStockForm';

export const AddNewStock = () => {
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
    <div className="text-center">
      <Button
        type="button"
        label="Add New Stock"
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
        <AddNewStockForm closeModal={closeModal} />
      </Modal>
    </div>
  );
};
