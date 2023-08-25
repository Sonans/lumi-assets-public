import React from 'react';
import { Container } from '..';
import { BackgroundColorProps } from '../types';
import { classes } from '../utils/helpers';

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface Props extends BackgroundColorProps {
  cols?: Cols;
  children: React.ReactNode;
}

export function Row({ backgroundColor = 'white', cols = 1, children }: Props) {
  const backgroundStyle = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
    white: 'bg-white',
    black: 'bg-black',
  };

  const colStyle = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    7: 'grid-cols-7',
    8: 'grid-cols-8',
    9: 'grid-cols-9',
    10: 'grid-cols-10',
    11: 'grid-cols-11',
    12: 'grid-cols-12',
  };

  return <div className={classes(`w-full grid gap-4`, colStyle[cols])}>{children}</div>;
}
