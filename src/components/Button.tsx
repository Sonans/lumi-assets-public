import React from 'react';
import { classes } from '../utils/helpers';

type ButtonMode = 'dark' | 'light' | 'yellow' | 'green' | 'pink';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: ButtonMode;
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, mode = 'yellow', className = '', ...props }: Props) {
  const modeClasses: { [key in ButtonMode]: string } = {
    dark: 'bg-black text-white hover:bg-first-color hover:text-black disabled:hover:bg-black disabled:hover:text-white',
    light: 'bg-white text-black hover:bg-black hover:text-white disabled:hover:bg-white disabled:hover:text-black',
    yellow:
      'bg-first-color text-black hover:bg-black hover:text-white disabled:hover:bg-first-color disabled:hover:text-black',
    green:
      'bg-third-color text-black hover:bg-black hover:text-white disabled:hover:bg-third-color disabled:hover:text-black',
    pink: 'bg-second-color text-black hover:bg-black hover:text-white disabled:hover:bg-second-color disabled:hover:text-black',
  };

  return (
    <button
      {...props}
      className={classes(
        modeClasses[mode],
        `font-sans text-md font-bold flex items-center rounded-md cursor-pointer border border-solid border-black py-2 px-4 disabled:opacity-50 disabled:bg-bg-grey disabled:text-text-grey disabled:cursor-default transition-all`,
        className
      )}>
      {children}
    </button>
  );
}
