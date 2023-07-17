import { classes } from "../utils/helpers";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className = '', ...props }: Props) {
  return <input {...props} className={classes('p-2 border-solid border-[1px] border-gray-400 text-lg rounded-md outline-none', className)} {...props} />;
}
