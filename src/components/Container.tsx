import { classes } from '../utils/helpers';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  autoAligned?: boolean;
  style?: React.CSSProperties;
}
let autoCss = "px-2 mx-auto sm:px-0"
export function Container({ children, className = '', autoAligned = true, style = {} }: ContainerProps) {
  return <div style={style} className={classes(`font-sans container ${autoAligned ? autoCss : '' }`, className)}>{children}</div>;
}
