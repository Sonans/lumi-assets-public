import { classes } from '../utils/helpers';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  autoAligned?: boolean;
  style?: React.CSSProperties;
}
export function Container({ children, className = '', autoAligned = true, style = {} }: ContainerProps) {
  const autoCss = 'px-2 mx-auto sm:px-0';
  return (
    <div style={style} className={classes(`font-sans container ${autoAligned ? autoCss : ''}`, className)}>
      {children}
    </div>
  );
}
