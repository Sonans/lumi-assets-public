import { useState } from 'react';
import { Button, Input, Modal, Accordion, Container, Select, Message, Badge, Row, Column, Header, Box } from '../src';
import { PresentationCard } from './components/PresentationCard';
import Toggle from '../src/components/Toggle';
import { Checkbox } from '../src/components/Checkbox';

export default function App() {
  const [modalSmall, setModalSmall] = useState(false);
  const [modalMedium, setModalMedium] = useState(false);
  const [modalLarge, setModalLarge] = useState(false);
  const [modalFull, setModalFull] = useState(false);
  const [restrictedModal, setRestrictedModal] = useState(false);

  const [selectedTheme, setSelectedTheme] = useState('theme-sonans');

  return (
    <div className={selectedTheme}>
      <Header />
      <div className='flex gap-2'>
        <button onClick={() => setSelectedTheme('theme-sonans')}>Sonans</button>
        <button onClick={() => setSelectedTheme('theme-onh')}>ONH</button>
        <button onClick={() => setSelectedTheme('theme-alf')}>ALF</button>
        <button onClick={() => setSelectedTheme('theme-lumi')}>Lumi</button>
      </div>
      <div>
        <div className='bg-white flex flex-col font-sans'>
          <div className='p-8'>
            <h1 className='text-4xl'>Components</h1>
          </div>
          <PresentationCard title='Button'>
            <div className='w-full'>
              <h2>Small buttons</h2>
              <div className='flex gap-2'>
                <Button size='sm' backgroundColor='primary'>
                  Small button
                </Button>
                <Button size='sm' backgroundColor='secondary'>
                  Small button
                </Button>
                <Button size='sm' backgroundColor='tertiary'>
                  Small button
                </Button>
                <Button size='sm' backgroundColor='black'>
                  Small button
                </Button>
                <Button size='sm' backgroundColor='white'>
                  Small button
                </Button>
              </div>
            </div>
            <div className='w-full'>
              <h2>Medium buttons</h2>
              <div className='flex gap-2'>
                <Button size='md' backgroundColor='primary'>
                  Medium button
                </Button>
                <Button size='md' backgroundColor='secondary'>
                  Medium button
                </Button>
                <Button size='md' backgroundColor='tertiary'>
                  Medium button
                </Button>
                <Button size='md' backgroundColor='black'>
                  Medium button
                </Button>
                <Button size='md' backgroundColor='white'>
                  Medium button
                </Button>
              </div>
            </div>
            <div className='w-full'>
              <h2>Large buttons</h2>
              <div className='flex gap-2'>
                <Button size='lg' backgroundColor='primary'>
                  Large button
                </Button>
                <Button size='lg' backgroundColor='secondary'>
                  Large button
                </Button>
                <Button size='lg' backgroundColor='tertiary'>
                  Large button
                </Button>
                <Button size='lg' backgroundColor='black'>
                  Large button
                </Button>
                <Button size='lg' backgroundColor='white'>
                  Large button
                </Button>
              </div>
            </div>
            <div className='w-full'>
              <h2>Full width button</h2>
              <div className='flex gap-2'>
                <Button size='full' backgroundColor='primary'>
                  Full button
                </Button>
              </div>
            </div>
          </PresentationCard>
          <PresentationCard title='Checkbox'>
            <Container className='bg-white p-8 flex gap-4' autoAligned={false}>
              <Badge backgroundColor='primary'>This is a badge</Badge>
              <Badge backgroundColor='secondary'>This is a badge</Badge>
              <Badge backgroundColor='tertiary'>This is a badge</Badge>
            </Container>
          </PresentationCard>
          <PresentationCard title='Checkbox'>
            <Container className='bg-white p-8 flex gap-4' autoAligned={false}>
              <Checkbox checked />
              <Checkbox checked mode='secondary' />
              <Checkbox checked mode='tertiary' />
              <Checkbox checked mode='black' />
            </Container>
          </PresentationCard>
          <PresentationCard title='Toggle'>
            <Container className='bg-white p-8 flex gap-4' autoAligned={false}>
              <Toggle checked />
              <Toggle checked mode='secondary' />
              <Toggle checked mode='tertiary' />
              <Toggle checked mode='dark' />
            </Container>
          </PresentationCard>
          <PresentationCard title='Message'>
            <Container className='flex flex-col gap-4' autoAligned={false}>
              <Message backgroundColor='primary'>Hello World!</Message>
              <Message backgroundColor='secondary'>Hello World!</Message>
              <Message backgroundColor='tertiary'>Hello World!</Message>
            </Container>
          </PresentationCard>
          <PresentationCard title='Select'>
            <Container autoAligned={false}>
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
            <Container autoAligned={false}>
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
          <PresentationCard title='Input'>
            <Container autoAligned={false}>
              <Input />
            </Container>
          </PresentationCard>
          <PresentationCard title='Modal'>
            <Button onClick={() => setModalSmall(true)}>Small modal</Button>
            {modalSmall && (
              <Modal size='sm' onClose={() => setModalSmall(false)}>
                Hello World!
              </Modal>
            )}
            <Button onClick={() => setModalMedium(true)}>Medium modal</Button>
            {modalMedium && (
              <Modal size='md' onClose={() => setModalMedium(false)}>
                Hello World!
              </Modal>
            )}
            <Button onClick={() => setModalLarge(true)}>Large modal</Button>
            {modalLarge && (
              <Modal size='lg' onClose={() => setModalLarge(false)}>
                Hello World!
              </Modal>
            )}
            <Button onClick={() => setModalFull(true)}>Full modal</Button>
            {modalFull && (
              <Modal size='full' onClose={() => setModalFull(false)}>
                Hello World!
              </Modal>
            )}
            <Button backgroundColor='secondary' onClick={() => setRestrictedModal(true)}>
              Restricted modal
            </Button>
            {restrictedModal && (
              <Modal size='lg' restrictClose onClose={() => setRestrictedModal(false)}>
                Hello World!
              </Modal>
            )}
          </PresentationCard>
          <PresentationCard title='Row & Column'>
            <Row cols={6}>
              <Column>
                <Box>1</Box>
              </Column>
              <Column>
                <Box>2</Box>
              </Column>
              <Column>
                <Box>3</Box>
              </Column>
              <Column>
                <Box>4</Box>
              </Column>
              <Column>
                <Box>5</Box>
              </Column>
              <Column>
                <Box>6</Box>
              </Column>
            </Row>
            <Row cols={6}>
              <Column colSpan={3}>
                <Box ascpectRatio='wide' centered={false}>
                  <h2>Hello!</h2>
                  <Button>Hello</Button>
                </Box>
              </Column>
            </Row>
          </PresentationCard>
        </div>
      </div>
    </div>
  );
}
