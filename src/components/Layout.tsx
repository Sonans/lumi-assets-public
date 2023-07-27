import React from 'react';
import { Container } from '..';

type Cols = 1 | 2 | 3 | 4 | 5 | 6;
type Rows = 1 | 2 | 3 | 4 | 5 | 6;

export interface LayoutProps {
  backgroundColor?: 'primary' | 'white' | 'black' | undefined;
  cols?: Cols;
  rows?: Rows;
  children: React.ReactNode;
}

export function Layout({ backgroundColor = 'white', cols = 1, rows = 1, children }: LayoutProps) {
  const backgroundStyle = {
    primary: 'bg-primary',
    white: 'bg-white',
    black: 'bg-black',
  };

  const colStyle = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  };

  const rowStyle = {
    1: 'grid-rows-1',
    2: 'grid-rows-2',
    3: 'grid-rows-3',
    4: 'grid-rows-4',
    5: 'grid-rows-5',
    6: 'grid-rows-6',
  };

  return (
    <div className={`w-[100%] ${backgroundStyle[backgroundColor]}`}>
      <Container>
        <div className={`w-[96%] mx-auto grid ${colStyle[cols]} ${rowStyle[rows]} gap-4 py-4`}>{children}</div>
      </Container>
    </div>
  );
}
