interface Props {
  content?: string;
}

export function Code({ content }: Props) {
  return (
    <pre className="bg-slate-800 text-white p-4 rounded-md text-sm">
      <code>{content}</code>
    </pre>
  );
}
