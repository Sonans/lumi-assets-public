import React from 'react';
import { classes } from '../utils/helpers';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  mode?: 'primary' | 'secondary' | 'tertiary' | 'dark';
}

export default function Toggle({ mode = 'primary', ...props }: Props) {

  const modeClasses = {
    primary: 'peer-checked:bg-primary',
    secondary: 'peer-checked:bg-secondary',
    tertiary: 'peer-checked:bg-tertiary',
    dark: 'peer-checked:bg-black',
  };

  return (
    <>
      <label className='relative inline-flex items-center cursor-pointer'>
        <input type='checkbox' className='sr-only peer' {...props} />
        <div
          className={classes(
            "w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-100 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all",
            modeClasses[mode]
          )}></div>
      </label>
    </>
  );
}
