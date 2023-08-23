import { classes } from '../utils/helpers';
import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      {...props}
      className={classes(
        'font-sans p-2 border-solid border-[1px] border-gray-400 w-full rounded-none text-md outline-primary',
        className
      )}
      {...props}
    />
  );
}
