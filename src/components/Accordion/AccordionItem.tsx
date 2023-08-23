import { useState } from 'react';

export interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  titleBackgroundColor?: 'white' | 'primary';
  contentBackgroundColor?: 'white' | 'primary';
}

export function AccordionItem({
  title,
  content,
  contentBackgroundColor = 'white',
  titleBackgroundColor = 'white',
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const arrowStyle = isOpen ? 'transform rotate-180' : '';

  const contentBackgroundStyle = {
    white: 'bg-white',
    primary: 'bg-primary',
  };

  const titleBackgroundStyle = {
    white: `hover:bg-gray-100 border ${isOpen ? 'bg-gray-100' : 'bg-white'}`,
    primary: `hover:bg-yellow-400 border border-black ${isOpen ? 'bg-yellow-400' : 'bg-primary'}`,
  };

  return (
    <div>
      <div
        className={`flex justify-between transition-all items-center p-4 relative z-10 ${titleBackgroundStyle[titleBackgroundColor]}`}
        onClick={() => setIsOpen(!isOpen)}>
        {title}{' '}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={`w-6 h-6 transition-all ${arrowStyle}`}>
          <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
        </svg>
      </div>
      {isOpen && (
        <div className={`pl-8 pt-4 pb-4 animate-slide ${contentBackgroundStyle[contentBackgroundColor]}`}>
          {content}
        </div>
      )}
    </div>
  );
}