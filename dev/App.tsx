import { useState } from 'react';
import { Button, Header, Input, Modal, Card, Layout, Column, Accordion, Container, Select } from '../src';
import { PresentationCard } from './components/PresentationCard';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className='bg-gray-100 flex flex-col font-sans'>
        <div className='p-8'>
          <h1 className='text-4xl'>Components</h1>
        </div>
        <PresentationCard title='Select'>
          <Select options={[{text: "1", value: "1"}, {text: "2", value: "2"}]} onChange={(e)=> {console.log(e.target.value);}} />
        </PresentationCard>
        <PresentationCard title='Accordion'>
          <Container>
            <Accordion
              titleBackgroundColor='white'
              contentBackgroundColor='white'
              data={[
                {
                  title: 'Hello',
                  content: (
                    <ul>
                      <li>lol</li>
                      <li>lol</li>
                      <li>lol</li>
                      <li>lol</li>
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
