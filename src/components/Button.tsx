import React from 'react';
import { classes } from '../utils/helpers';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, className = '', ...props }: Props) {
  return (
    <button {...props} className={classes('py-2 px-6 border-solid border-[1px] bg-yellow-300 text-black text-lg rounded-lg cursor-pointer', className)}>
      {children}
    </button>
  );
}
