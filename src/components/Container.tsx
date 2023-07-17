import { classes } from '../utils/helpers';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: Props) {
  return (
    <div className={classes('font-sans px-4 xl:w-[1000px] xl:mx-auto', className)}>
      {children}
    </div>
  );
}