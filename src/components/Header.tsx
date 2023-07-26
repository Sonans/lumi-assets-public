import { Container } from './Container';
import { classes } from '../utils/helpers';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className={classes('w-full font-sans flex justify-between bg-primary')}>
      <Container className='py-4'>
        <Logo type='logo' />
      </Container>
    </header>
  );
}
