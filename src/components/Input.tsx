interface Props extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className = '', ...props }: Props) {
  return <input {...props} className='p-2 border-solid border-[1px] border-gray-400 text-lg rounded-md outline-none' {...props} />;
}
