import React from 'react';
import { classes } from '../utils/helpers';
import { ButtonHTMLAttributes } from 'react';
import { BackgroundColorProps, SizeProps } from '../types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, SizeProps, BackgroundColorProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export function Button({
  children,
  backgroundColor = 'primary',
  className = '',
  size = 'md',
  centered = false,
  ...props
}: ButtonProps) {
  const backgroundColorClasses = {
    primary:
      'bg-primary text-text-on-primary hover:bg-black hover:text-white disabled:hover:bg-primary disabled:hover:text-black',
    secondary:
      'bg-secondary text-text-on-secondary hover:bg-black hover:text-white disabled:hover:bg-secondary disabled:hover:text-black',
    tertiary:
      'bg-tertiary text-black hover:bg-black hover:text-white disabled:hover:bg-tertiary disabled:hover:text-black',
    white: 'bg-white text-black hover:bg-black hover:text-white disabled:hover:bg-white disabled:hover:text-black',
    black: 'bg-black text-white hover:bg-primary hover:text-black disabled:hover:bg-black disabled:hover:text-white',
  };

  const sizeClasses = {
    sm: 'w-auto self-start grow-0 py-1 px-2 text-sm',
    md: 'w-auto self-start grow-0 py-2 px-3 text-base',
    lg: 'w-auto self-start grow-0 py-3 px-6 text-lg',
    full: 'w-full py-3 text-lg',
  };

  const centeredClasses = centered ? 'mx-auto' : '';

  return (
    <button
      {...props}
      className={classes(
        backgroundColorClasses[backgroundColor],
        sizeClasses[size],
        centeredClasses,
        `la-button font-sans text-md font-medium flex items-center justify-center rounded-[var(--borderRadius)] cursor-pointer disabled:opacity-50 disabled:bg-bg-grey disabled:text-text-grey disabled:cursor-default transition-all`,
        className
      )}>
      {children}
    </button>
  );
}
