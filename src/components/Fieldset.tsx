import { FieldsetHTMLAttributes } from 'react';

interface Props extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  children: React.ReactNode;
  legend: string;
}

export function Fieldset({ children, legend, ...props }: Props) {
  return (
    <fieldset className='w-full border border-gray-300 p-8 rounded-radius' {...props}>
      <legend className='bg-gray-100 px-2 rounded-radius font-medium'>{legend}</legend>
      {children}
    </fieldset>
  );
}
