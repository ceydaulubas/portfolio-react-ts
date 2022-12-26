import React, { useState } from 'react';
import { SApp } from './organisms/index';

export const ThemeContext = React.createContext({ theme: 'light', setTheme: () => {} } as { theme: 'light' | 'dark'; setTheme: Function });

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <SApp />
    </ThemeContext.Provider>
  );
};

export default App;
