import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDialogElement> {
  children: React.ReactNode;
}

export function Dialog({ children, ...props }: Props) {
  return (
    <dialog className='border-0' {...props}>
      <form className='backdrop-blur-sm' method='dialog'>
        <div>
          <button className='outline-none border-0 border-solid bg-transparent cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-6 h-6'>
              <path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>
        {children}
      </form>
    </dialog>
  );
}
