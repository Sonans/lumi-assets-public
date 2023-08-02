import { useState } from 'react';
import { Button, Header, Input, Modal, Card, Layout, Column, Accordion, Container, Select, Message } from '../src';
import { PresentationCard } from './components/PresentationCard';
import Toggle from '../src/components/Toggle';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className='bg-gray-100 flex flex-col font-sans'>
        <div className='p-8'>
          <h1 className='text-4xl'>Components</h1>
        </div>
        <PresentationCard title='Accordion'>
          <Container className='bg-white p-8 flex gap-4' autoAligned={false}>
          <Message />
          </Container>
        </PresentationCard>
        <PresentationCard title='Select'>
          <Container className='bg-white p-8 flex gap-4' autoAligned={false}>
            <Toggle />
            <Toggle mode='secondary' />
            <Toggle mode="tertiary" />
            <Toggle mode="dark" />
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
          <Button>Hello!</Button>
          <Button mode='dark'>Hello!</Button>
          <Button mode='pink'>Hello!</Button>
          <Button mode='light'>Hello!</Button>
          <Button mode='green'>Hello!</Button>
          <Button size='lg' mode='dark'>Hello!</Button>
          <Button size='lg' mode='pink'>Hello!</Button>
          <Button size='lg' mode='light'>Hello!</Button>
          <Button size='lg' mode='green'>Hello!</Button>
        </PresentationCard>
        <PresentationCard title='Input'>
          <Input />
        </PresentationCard>
        <PresentationCard title='Header'>
          <Header />
        </PresentationCard>
        <PresentationCard title='Modal'>
          <Button onClick={() => setIsOpen(true)}>Click to open</Button>
          {isOpen && <Modal onClose={() => setIsOpen(false)}>Hello World!</Modal>}
        </PresentationCard>
        <PresentationCard title='Card'>
          <Card>
            <p>Hello World!</p>
          </Card>
        </PresentationCard>
        <PresentationCard title='Layout'>
          <Layout cols={6}>
            <Card backgroundColor='primary'>
              <Column>
                <p>Hello World!</p>
                <Button mode='dark'>Hello!</Button>
              </Column>
            </Card>
            <Card>
              <p>Hello World!</p>
            </Card>
            <Card>
              <p>Hello World!</p>
            </Card>
            <Card>
              <p>Hello World!</p>
            </Card>
            <Card>
              <p>Hello World!</p>
            </Card>
            <Card>
              <p>Hello World!</p>
            </Card>
          </Layout>
        </PresentationCard>
      </div>
    </div>
  );
}
