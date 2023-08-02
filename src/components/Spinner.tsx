import { Logo } from './Logo';

export function Spinner() {
  return (
    <div className='w-full h-[300px] flex justify-center items-center'>
      <Logo type='symbol' className='w-32 animate-spin-slow text-gray-200' />
    </div>
  );
}