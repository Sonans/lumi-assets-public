import React from 'react';
import { classes } from '../utils/helpers';

type ButtonMode = 'dark' | 'light' | 'yellow' | 'green' | 'pink';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: ButtonMode;
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, mode = 'yellow', className = '', ...props }: ButtonProps) {
  const modeClasses = {
    dark: 'bg-black text-white hover:bg-primary hover:text-black disabled:hover:bg-black disabled:hover:text-white',
    light: 'bg-white text-black hover:bg-black hover:text-white disabled:hover:bg-white disabled:hover:text-black',
    yellow:
      'bg-primary text-black hover:bg-black hover:text-white disabled:hover:bg-primary disabled:hover:text-black',
    green:
      'bg-tertiary text-black hover:bg-black hover:text-white disabled:hover:bg-tertiary disabled:hover:text-black',
    pink: 'bg-secondary text-black hover:bg-black hover:text-white disabled:hover:bg-secondary disabled:hover:text-black',
  };

  return (
    <button
      {...props}
      className={classes(
        modeClasses[mode],
        `font-sans text-md font-bold flex items-center justify-center w-auto self-start grow-0 rounded-md cursor-pointer border border-solid border-black py-2 px-4 disabled:opacity-50 disabled:bg-bg-grey disabled:text-text-grey disabled:cursor-default transition-all`,
        className
      )}>
      {children}
    </button>
  );
}
