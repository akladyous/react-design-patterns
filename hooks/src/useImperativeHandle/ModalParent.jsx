import React, { useRef } from 'react';
import Modal from './Modal';

export default function ModalParent() {
  const modalRef = useRef(null);
  const openModal = () => {
    modalRef.current.openModal();
  };
  return (
    <div className='border rounded-lg h-80 p-5 mx-10 px-10 mb-10 bg-slate-100 flex items-center justify-center'>
      <button
        className='border border-red-500 p-5 rounded-lg capitalize'
        onClick={openModal}
      >
        open modal
      </button>
      <Modal ref={modalRef} />
    </div>
  );
}
