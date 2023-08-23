import { classes } from '../utils/helpers';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  autoAligned?: boolean;
  style?: React.CSSProperties;
}

export function Container({ children, className = '', autoAligned = true, ...props }: Props) {
  const autoCss = 'mx-auto';
  return (
    <div className={classes(`font-sans container ${autoAligned ? autoCss : ''}`, className)} {...props}>
      {children}
    </div>
  );
}
