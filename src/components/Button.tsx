import React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  return <button style={{ backgroundColor: 'yellow' }}>{children}</button>;
}

export default Button;