import { classes } from '../utils/helpers';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return <div className={classes('font-sans px-2 sm:px-0 container mx-auto', className)}>{children}</div>;
}
