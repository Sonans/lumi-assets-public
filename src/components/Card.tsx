type CardPadding = 'sm' | 'md' | 'lg' | 'xl' | 'none';

export interface CardProps {
  padding?: CardPadding;
  backgroundColor?: 'primary' | 'secondary' | 'tertiary' | 'white' | 'black' | 'none';
  children: React.ReactNode;
}

export function Card({ padding = 'md', children, backgroundColor = 'white' }: CardProps) {
  const paddingStyle = {
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-8',
    xl: 'p-16',
    none: '',
  };

  const backgroundColorStyle = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
    white: 'bg-white',
    black: 'bg-black text-white',
    none: '',
  };

  return (
    <div
      className={`${paddingStyle[padding]} ${backgroundColorStyle[backgroundColor]} border-2 border-black rounded-lg`}>
      {children}
    </div>
  );
}
