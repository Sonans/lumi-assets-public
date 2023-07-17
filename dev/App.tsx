import { Button, Input } from '../src';

export default function App() {
  return (
    <div className='flex flex-col font-sans border-blue-600'>
      <div className='p-4 border'>
        <h2>Button</h2>
        <Button>Hello!</Button>
      </div>
      <div className='p-4'>
        <h2>Input</h2>
        <Input />
      </div>
    </div>
  );
}
