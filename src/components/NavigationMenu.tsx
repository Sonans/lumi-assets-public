import { useEffect, useRef } from 'react';
import { Container } from './Container';

export interface Props {
  onClose: () => void;
  children?: React.ReactNode;
}

export function NavigationMenu({ onClose, children }: Props) {
  const navigationMenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = document.querySelector('body');
    body?.classList.add('overflow-hidden');

    return () => {
      body?.classList.remove('overflow-hidden');
    };
  }, []);

  useEffect(() => {
    const header = document.querySelector('header');
    const menu = navigationMenu.current;
    const height = header?.getBoundingClientRect().height;

    menu?.style.setProperty('transform', `translateY(${height as number}px)`);

    return () => {
      menu?.style.removeProperty('transform');
    };
  }, []);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  function handleClose(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = e.target as HTMLElement;
    if (target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      ref={navigationMenu}
      className='navigation-menu absolute top-0 left-0 z-50 w-screen h-screen translate-y-16 bg-primary'>
      <Container>
        <div className='font-medium text-2xl grid grid-cols-1 md:grid-cols-2 py-16 gap-4'>
          {children}
        </div>
      </Container>
    </div>
  );
}
