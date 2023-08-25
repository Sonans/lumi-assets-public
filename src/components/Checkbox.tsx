import { InputHTMLAttributes } from 'react';
import { classes } from '../utils/helpers';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  mode?: 'primary' | 'secondary' | 'tertiary' | 'black';
}

export function Checkbox({ mode = 'primary', ...props }: Props) {
  const modeClasses = {
    primary: ' border-primary accent-primary',
    secondary: ' border-secondary accent-secondary',
    tertiary: ' border-tertiary accent-tertiary',
    black: ' border-black accent-black',
  };

  return (
    <input
      type='checkbox'
      className={classes(
        modeClasses[mode],
        'bg-transparent border w-6 h-6 after:h-4 relative after:w-4 after:absolute cursor-pointer after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%]'
      )}
      {...props}
    />
  );
}
