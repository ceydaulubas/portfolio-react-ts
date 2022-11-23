import React, { useContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, About, Projects, Skills } from './pages';
import { Navigation } from './organisms';
import { StyledApp } from './App.sc';
import { ThemeProvider } from 'styled-components';
import { colorTheme } from './assets/common/color';

export const ThemeContext = React.createContext({ theme: 'light', setTheme: () => {} } as { theme: 'light' | 'dark'; setTheme: Function });

const SApp = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={colorTheme[theme]}>
      <StyledApp>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/skills' element={<Skills />} />
          </Routes>
        </BrowserRouter>
      </StyledApp>
    </ThemeProvider>
  );
};

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <SApp />
    </ThemeContext.Provider>
  );
};

export default App;
