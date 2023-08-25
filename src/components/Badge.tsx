import { BackgroundColorProps } from '../types';
import { classes } from '../utils/helpers';

interface Props extends BackgroundColorProps {
  children: React.ReactNode;
}

export function Badge({ children, backgroundColor = 'primary' }: Props) {
  const backgroundColorClasses = {
    primary: 'bg-primary/40 text-black',
    secondary: 'bg-secondary/40 text-black',
    tertiary: 'bg-tertiary/40 text-black',
    white: 'bg-white/40 text-black',
    black: 'bg-black/40 text-black',
  };

  return (
    <div className={classes('w-auto self-start grow-0 px-3 py-1 rounded-radius font-medium', backgroundColorClasses[backgroundColor])}>
      {children}
    </div>
  );
}
