import React from 'react';

type ColStart = 1 | 2 | 3 | 4 | 5 | 6;
type RowStart = 1 | 2 | 3 | 4 | 5 | 6;
type ColSpan = 1 | 2 | 3 | 4 | 5 | 6;
type ColGap = 'sm' | 'md' | 'lg' | 'xl' | 'none';

export interface ColumnProps {
  colStart?: ColStart;
  rowStart?: RowStart;
  colSpan?: ColSpan;
  gap?: ColGap;
  direction?: 'row' | 'column';
  children: React.ReactNode;
}

export function Column({ colStart = 1, rowStart = 1, children, colSpan = 1, gap = 'md', direction = 'column' }: ColumnProps) {
  const colPlacementStyle = {
    1: 'col-start-1',
    2: 'col-start-2',
    3: 'col-start-3',
    4: 'col-start-4',
    5: 'col-start-5',
    6: 'col-start-6',
  };

  const rowPlacementStyle = {
    1: 'row-start-1',
    2: 'row-start-2',
    3: 'row-start-3',
    4: 'row-start-4',
    5: 'row-start-5',
    6: 'row-start-6',
  };

  const colSpanStyle = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    5: 'col-span-5',
    6: 'col-span-6',
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
      className={`flex ${directionStyle[direction]} ${colPlacementStyle[colStart]} ${rowPlacementStyle[rowStart]} ${colSpanStyle[colSpan]} ${gapStyle[gap]}`}>
      {children}
    </div>
  );
}
