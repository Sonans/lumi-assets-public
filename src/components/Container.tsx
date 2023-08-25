import { classes } from '../utils/helpers';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  autoAligned?: boolean;
  style?: React.CSSProperties;
}

export function Container({ children, className = '', autoAligned = true, ...props }: Props) {
  return (
    <div className={classes(`font-sans container`, autoAligned ? 'mx-auto' : 'p-0', className)} {...props}>
      {children}
    </div>
  );
}
