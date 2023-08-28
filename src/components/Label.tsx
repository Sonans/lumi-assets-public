import { LabelHTMLAttributes } from 'react';

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export function App({ children, ...props }: Props) {
  return <label {...props}>{children}</label>;
}
