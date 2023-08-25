import React from 'react';

type ColStart = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';
type ColSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type ColGap = 'sm' | 'md' | 'lg' | 'xl' | 'none';

export interface ColumnProps {
  colStart?: ColStart;
  colSpan?: ColSpan;
  gap?: ColGap;
  direction?: 'row' | 'column';
  children: React.ReactNode;
}

export function Column({ colStart = 'auto', children, colSpan = 1, gap = 'md', direction = 'column' }: ColumnProps) {
  const colPlacementStyle = {
    1: 'col-start-1',
    2: 'col-start-2',
    3: 'col-start-3',
    4: 'col-start-4',
    5: 'col-start-5',
    6: 'col-start-6',
    7: 'col-start-7',
    8: 'col-start-8',
    9: 'col-start-9',
    10: 'col-start-10',
    11: 'col-start-11',
    12: 'col-start-12',
    auto: 'col-start-auto',
  };

  const colSpanStyle = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    5: 'col-span-5',
    6: 'col-span-6',
    7: 'col-span-7',
    8: 'col-span-8',
    9: 'col-span-9',
    10: 'col-span-10',
    11: 'col-span-11',
    12: 'col-span-12',
  };

  const gapStyle = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-8',
    xl: 'gap-16',
    none: '',
  };

  const directionStyle = {
    row: 'flex-row',
    column: 'flex-col',
  };

  return (
    <div
      className={`flex ${directionStyle[direction]} ${colPlacementStyle[colStart]} ${colSpanStyle[colSpan]} ${gapStyle[gap]}`}>
      {children}
    </div>
  );
}
