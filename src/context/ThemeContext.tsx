import { createContext, useEffect, useState } from 'react';

export type Theme = 'lumi' | 'sonans';

export interface ThemeContext {
  selectedTheme: Theme;
  setSelectedTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContext>(null!);

interface Props {
  children: React.ReactNode;
  theme?: Theme;
}

export function ThemeProvider({ children, theme }: Props) {
  const [selectedTheme, setSelectedTheme] = useState<Theme>('sonans');

  useEffect(() => {
    if (theme) {
      setSelectedTheme(theme);
    }
  }, [theme]);

  return <ThemeContext.Provider value={{ selectedTheme, setSelectedTheme }}>{children}</ThemeContext.Provider>;
}
