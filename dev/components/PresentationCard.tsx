import React from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
}

export function PresentationCard({ title, children }: Props) {
  return (
    <div className='py-8 border-b border-gray-300'>
      <h2 className='text-2xl mb-4'>{title}</h2>
      <div className='flex gap-2 flex-wrap'>{children}</div>
    </div>
  );
}
