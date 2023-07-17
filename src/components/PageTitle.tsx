import React from 'react';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function PageTitle({ children }: Props) {
  return <h1 className='text-3xl font-bold font-sans'>{children}</h1>;
}
