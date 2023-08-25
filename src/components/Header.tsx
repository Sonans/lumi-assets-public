'use client';

import { Container } from './Container';
import { classes } from '../utils/helpers';
import { useState } from 'react';
import { NavigationMenu } from './NavigationMenu';

interface Props {
  logo?: React.ReactNode;
}

export function Header({ logo = 'logo' }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={classes('w-full font-sans flex justify-between bg-primary')}>
        <Container className='py-4 flex justify-between'>
          {logo}
          <button name='navigation' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-8 h-8'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
            </svg>
          </button>
        </Container>
      </header>
      {isMenuOpen && <NavigationMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}
