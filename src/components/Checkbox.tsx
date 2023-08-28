import { InputHTMLAttributes } from 'react';
import { classes } from '../utils/helpers';
import { BackgroundColorProps } from '../types';

interface Props extends InputHTMLAttributes<HTMLInputElement>, BackgroundColorProps {}

export function Checkbox({ backgroundColor = 'primary', ...props }: Props) {
  const backgroundColorClasses = {
    primary: ' border-primary accent-primary',
    secondary: ' border-secondary accent-secondary',
    tertiary: ' border-tertiary accent-tertiary',
    white: ' border-white accent-white',
    black: ' border-black accent-black',
  };

  return (
    <input
      type='checkbox'
      className={classes(
        backgroundColorClasses[backgroundColor],
        'bg-transparent border w-6 h-6 after:h-4 relative after:w-4 after:absolute cursor-pointer after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%]'
      )}
      {...props}
    />
  );
}
