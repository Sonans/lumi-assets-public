import React from 'react';
import { classes } from '../utils/helpers';
import { ButtonHTMLAttributes } from 'react';

type ButtonMode = 'black' | 'white' | 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: ButtonMode;
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ children, mode = 'primary', className = '', size = 'md', ...props }: ButtonProps) {
  const modeClasses = {
    primary:
      'bg-primary text-black hover:bg-black hover:text-white disabled:hover:bg-primary disabled:hover:text-black',
    secondary:
      'bg-secondary text-black hover:bg-black hover:text-white disabled:hover:bg-secondary disabled:hover:text-black',
    tertiary:
      'bg-tertiary text-black hover:bg-black hover:text-white disabled:hover:bg-tertiary disabled:hover:text-black',
    white: 'bg-white text-black hover:bg-black hover:text-white disabled:hover:bg-white disabled:hover:text-black',
    black: 'bg-black text-white hover:bg-primary hover:text-black disabled:hover:bg-black disabled:hover:text-white',
  };

  const sizeClasses = {
    sm: 'py-1 px-4 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-8 text-lg',
  };

  return (
    <button
      {...props}
      className={classes(
        modeClasses[mode],
        sizeClasses[size],
        `font-sans text-md border-[var(--border)] font-medium flex items-center justify-center w-auto self-start grow-0 rounded-[var(--borderRadius)] cursor-pointer disabled:opacity-50 disabled:bg-bg-grey disabled:text-text-grey disabled:cursor-default transition-all`,
        className
      )}>
      {children}
    </button>
  );
}
