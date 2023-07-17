import React from 'react';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children }: Props) {
  return <button className='py-2 px-4 bg-yellow-300 text-black border-0 text-lg rounded-lg cursor-pointer'>{children}</button>;
}