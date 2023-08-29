export interface SizeProps {
  size?: 'sm' | 'md' | 'lg' | 'full';
}

type colors = 'primary' | 'secondary' | 'tertiary' | 'black' | 'white';

type outlines = 'outline-primary' | 'outline-secondary' | 'outline-tertiary' | 'outline-black' | 'outline-white';

export type gap = 'sm' | 'md' | 'lg' | 'xl' | 'none';

export interface BackgroundColorProps {
  backgroundColor?: colors;
}

export interface BackgroundColorAndOutline {
  backgroundColor?: colors & outlines;
}
