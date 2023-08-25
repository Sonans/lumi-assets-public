import { BackgroundColorProps } from '../types';
import { classes } from '../utils/helpers';

interface Props extends BackgroundColorProps {
  children: React.ReactNode;
  ascpectRatio?: 'square' | 'wide';
  centered?: boolean;
}

export function Box({ children, backgroundColor = 'primary', ascpectRatio = 'square', centered = true }: Props) {
  const aspectRatioClasses = {
    square: 'aspect-square',
    wide: 'aspect-video',
  };

  const centeredClasses = centered ? 'flex flex-col justify-center items-center gap-2' : 'p-4 flex gap-2 flex-col';

  const backgroundColorClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
    white: 'bg-white',
    black: 'bg-black',
  };

  return (
    <div
      className={classes(
        backgroundColorClasses[backgroundColor],
        aspectRatioClasses[ascpectRatio],
        centeredClasses,
        'rounded-radius'
      )}>
      {children}
    </div>
  );
}
