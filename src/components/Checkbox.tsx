import { InputHTMLAttributes } from 'react';
import { classes } from '../utils/helpers';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  mode?: 'primary' | 'secondary' | 'tertiary' | 'black';
}

export function Checkbox({ mode = 'primary', ...props }: Props) {
  const modeClasses = {
    primary: 'text-primary bg-gray-100 border-gray-300 rounded-md focus:ring-primary focu:ring-2',
    secondary: 'text-secondary bg-gray-100 border-gray-300 rounded-md focus:ring-secondary focu:ring-2',
    tertiary: 'text-tertiary bg-gray-100 border-gray-300 rounded-md focus:ring-tertiary focu:ring-2',
    black: 'text-black bg-gray-100 border-gray-300 rounded-md focus:ring-black focu:ring-2',
  };

  return <input type='checkbox' className={classes(modeClasses[mode])} {...props} />;
}
