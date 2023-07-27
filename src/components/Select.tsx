interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; text: string }[];
}

export function Select({ options, ...props }: SelectProps) {
  return (
    <select className="p-2 w-full rounded-md" {...props}>
      {options?.map((option) => (
        <option key={option.value} value={option.value}>{option.text}</option>
      ))}
    </select>
  );
}
