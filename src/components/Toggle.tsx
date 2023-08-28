import React from 'react';
import { classes } from '../utils/helpers';
import { BackgroundColorProps } from '../types';

interface Props extends React.InputHTMLAttributes<HTMLInputElement>, BackgroundColorProps {}

export default function Toggle({ backgroundColor = 'primary', ...props }: Props) {
  const backgroundColorClasses = {
    primary: 'peer-checked:bg-primary',
    secondary: 'peer-checked:bg-secondary',
    tertiary: 'peer-checked:bg-tertiary',
    white: 'peer-checked:bg-white',
    black: 'peer-checked:bg-black',
  };

  return (
    <>
      <label className='relative inline-flex items-center cursor-pointer'>
        <input type='checkbox' className='sr-only peer' {...props} />
        <div
          className={classes(
            "w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-100 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all",
            backgroundColorClasses[backgroundColor]
          )}></div>
      </label>
    </>
  );
}
