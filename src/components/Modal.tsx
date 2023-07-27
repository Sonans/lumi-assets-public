import React, { useEffect } from 'react';

export interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ onClose, children }: ModalProps) {
  useEffect(() => {
    const body = document.querySelector('body');
    body?.classList.add('overflow-hidden');

    return () => {
      body?.classList.remove('overflow-hidden');
    };
  }, []);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  function handleClose(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = e.target as HTMLElement;
    if (target.classList.contains('modal')) {
      onClose();
    }
  }

  return (
    <div
      onClick={handleClose}
      className='modal fixed inset-0 flex items-center justify-center z-50 overflow-auto bg-black bg-opacity-75'>
      <div className='w-11/12 md:max-w-md mx-auto shadow-lg py-4 bg-white px-6 border-4 border-primary'>
        <div className='w-full flex justify-end'>
          <button onClick={onClose} className='text-black close-modal'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12'></path>
            </svg>
          </button>
        </div>
        <div className='py-2'>{children}</div>
      </div>
    </div>
  );
}
