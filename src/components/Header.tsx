import { Container } from './Container';


export function Header() {
  return (
    <header className='bg-first-color flex justify-between'>
      <Container className='py-4'>
        <div>Logo</div>
      </Container>
    </header>
  );
}