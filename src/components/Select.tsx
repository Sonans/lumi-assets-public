interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; text: string }[];
}

export function Select({ options, ...props }: SelectProps) {
  return (
    <select {...props} className='p-4 w-full rounded-none border border-gray-300 outline-secondary'>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
}
