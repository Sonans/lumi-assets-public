import React from 'react';
import { BackgroundColorProps, gap } from '../types';
import { classes } from '../utils/helpers';

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Rows = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface Props extends BackgroundColorProps {
  cols?: Cols;
  rows?: Rows;
  children: React.ReactNode;
  gap: gap;
}

export function Layout({ cols = 1, rows = 1, children, gap = 'sm' }: Props) {
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

  const rowStyle = {
    1: 'grid-rows-1',
    2: 'grid-rows-2',
    3: 'grid-rows-3',
    4: 'grid-rows-4',
    5: 'grid-rows-5',
    6: 'grid-rows-6',
    7: 'grid-rows-7',
    8: 'grid-rows-8',
    9: 'grid-rows-9',
    10: 'grid-rows-10',
    11: 'grid-rows-11',
    12: 'grid-rows-12',
  };

  const gapStyle = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-8',
    xl: 'gap-16',
    none: '',
  };

  return <div className={classes(`w-full grid`, colStyle[cols], rowStyle[rows], gapStyle[gap])}>{children}</div>;
}
