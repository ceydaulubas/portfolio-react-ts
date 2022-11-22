import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, About, Projects, Skills } from './pages';
import { Navigation } from './organisms';
import { StyledApp } from './App.sc';
export const ThemeContext = React.createContext({} as { theme: string; setTheme: any });

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
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
    </ThemeContext.Provider>
  );
};

export default App;
