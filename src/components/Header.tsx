import { useContext } from 'react';
import { Container } from './Container';
import { ThemeContext } from '../context/ThemeContext';
import { classes } from '../utils/helpers';

export function Header() {
  const theme = useContext(ThemeContext);

  const themeMode = {
    lumi: 'bg-purple-600 text-white',
    sonans: 'bg-first-color text-black',
  };

  return (
    <header className={classes('w-full flex justify-between', themeMode[theme.selectedTheme])}>
      <Container className='py-4'>
        <div>Logo</div>
      </Container>
    </header>
  );
}
