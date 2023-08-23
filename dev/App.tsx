import { useState } from 'react';
import { Button, Input, Modal, Accordion, Container, Select, Message } from '../src';
import { PresentationCard } from './components/PresentationCard';
import Toggle from '../src/components/Toggle';
import { Checkbox } from '../src/components/Checkbox';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('theme-sonans');

  return (
    <div className={selectedTheme}>
      <div className='flex gap-2'>
        <button onClick={() => setSelectedTheme('theme-sonans')}>Sonans</button>
        <button onClick={() => setSelectedTheme('theme-onh')}>ONH</button>
        <button onClick={() => setSelectedTheme('theme-ntech')}>NTECH</button>
      </div>
      <div className='bg-white flex flex-col font-sans'>
        <div className='p-8'>
          <h1 className='text-4xl'>Components</h1>
        </div>
        <PresentationCard title='Message'>
          <Container className='bg-white p-8 flex gap-4' autoAligned={false}>
            <Message />
          </Container>
        </PresentationCard>
        <PresentationCard title='Checkbox'>
          <Container className='bg-white p-8 flex gap-4' autoAligned={false}>
            <Checkbox />
            <Checkbox mode='secondary' />
            <Checkbox mode='tertiary' />
            <Checkbox mode='black' />
          </Container>
        </PresentationCard>
        <PresentationCard title='Toggle'>
          <Container className='bg-white p-8 flex gap-4' autoAligned={false}>
            <Toggle />
            <Toggle mode='secondary' />
            <Toggle mode='tertiary' />
            <Toggle mode='dark' />
          </Container>
        </PresentationCard>
        <PresentationCard title='Select'>
          <Container className='bg-white p-8' autoAligned={false}>
            <Select
              options={[
                { text: '1', value: '1' },
                { text: '2', value: '2' },
              ]}
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </Container>
        </PresentationCard>
        <PresentationCard title='Accordion'>
          <Container autoAligned={false} className='bg-white p-8'>
            <Accordion
              titleBackgroundColor='white'
              contentBackgroundColor='white'
              data={[
                {
                  title: 'Hello',
                  content: (
                    <ul>
                      <li>World!</li>
                    </ul>
                  ),
                },
                { title: 'Goodbye', content: 'Mars!' },
                { title: 'Goodbye', content: 'Mars!' },
              ]}
            />
          </Container>
        </PresentationCard>
        <PresentationCard title='Button'>
          <Button mode='primary'>Hello!</Button>
          <Button mode='secondary'>Hello!</Button>
          <Button mode='tertiary'>Hello!</Button>
          <Button mode='white'>Hello!</Button>
          <Button mode='black'>Hello!</Button>
          <Button size='lg' mode='primary'>
            Hello!
          </Button>
          <Button size='lg' mode='secondary'>
            Hello!
          </Button>
          <Button size='lg' mode='tertiary'>
            Hello!
          </Button>
          <Button size='lg' mode='white'>
            Hello!
          </Button>
          <Button size='lg' mode='black'>
            Hello!
          </Button>
        </PresentationCard>
        <PresentationCard title='Input'>
          <Input />
        </PresentationCard>
        <PresentationCard title='Modal'>
          <Button onClick={() => setIsOpen(true)}>Click to open</Button>
          {isOpen && <Modal onClose={() => setIsOpen(false)}>Hello World!</Modal>}
        </PresentationCard>
      </div>
    </div>
  );
}
