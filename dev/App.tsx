import { useState } from 'react';
import { Button, Header, Input, Modal } from '../src';
import { PresentationCard } from './components/PresentationCard';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='bg-gray-100 flex flex-col font-sans'>
      <div className='p-8'>
        <h1 className='text-4xl'>Components</h1>
      </div>
      <PresentationCard title='Button'>
        <Button>Hello!</Button>
        <Button mode='dark'>Hello!</Button>
        <Button mode='pink'>Hello!</Button>
        <Button mode='light'>Hello!</Button>
        <Button mode='green'>Hello!</Button>
      </PresentationCard>
      <PresentationCard title='Input'>
        <Input />
      </PresentationCard>
      <PresentationCard title='Header'>
        <Header />
      </PresentationCard>
      <PresentationCard title='Modal'>
        <Button onClick={() => setIsOpen(true)}>Click to open</Button>
        {isOpen && <Modal onClose={() => setIsOpen(false)}>Hello jello</Modal>}
      </PresentationCard>
    </div>
  );
}
